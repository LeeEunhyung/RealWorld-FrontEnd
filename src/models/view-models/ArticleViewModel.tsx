import { observable, action } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { ArticlesApis } from '../../apis/ArticlesApis'

export class Article {
    @observable articleInfo: any
    @observable followingValue: string = ''
    @observable favoritedValue: string = ''

    @asyncAction public *getClickedArticle(slug: string) {
        try {
            const res = yield ArticlesApis.getClickedArticle(slug)
            this.setArticleInfo(res.data.article)
        } catch (e) {
            console.error(e.message)
        }
    }

    @action public setArticleInfo(data: any) {
        this.articleInfo = data

        this.followingValue = this.articleInfo.author.following
            ? `+ Unfollow ${this.articleInfo.author.username}`
            : `+ Follow ${this.articleInfo.author.username}`

        this.favoritedValue = this.articleInfo.favorited
            ? `♥ Unfavorite Article (${this.articleInfo.favoritesCount})`
            : `♥ Favorite Article (${this.articleInfo.favoritesCount})`
    }
}
