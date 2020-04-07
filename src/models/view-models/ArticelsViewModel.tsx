import { observable } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'
import { asyncAction } from 'mobx-utils'

export class Articles {
    @observable public tagsList: string[] = []
    @observable state: string = 'loading'

    @asyncAction public *getTags() {
        this.state = 'loading'
        try {
            this.tagsList = []
            const res = yield ArticlesApis.getTags()
            this.tagsList = res.data.tags
            this.state = 'done'
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }

    @asyncAction public *postFavoriteArticle(slug: string) {
        try {
            yield ArticlesApis.postFavoriteArticle(slug)
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *deleteFavoriteArticle(slug: string) {
        try {
            yield ArticlesApis.deleteFavoriteArticle(slug)
        } catch (e) {
            console.error(e.message)
        }
    }
}
