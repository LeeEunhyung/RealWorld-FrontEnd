import { observable } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { ArticlesApis } from '../../apis/ArticlesApis'

export class Article {
    @observable articleInfo: any

    @asyncAction public *getClickedArticle(slug: string) {
        try {
            const res = yield ArticlesApis.getClickedArticle(slug)
            this.articleInfo = res.data.article
        } catch (e) {
            console.error(e.message)
        }
    }
}
