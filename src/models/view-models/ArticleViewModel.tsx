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

    @asyncAction public *followAuthor() {
        try {
            yield ArticlesApis.followAuthor(this.articleInfo.author.username)
            this.getClickedArticle(this.articleInfo.slug)
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *unFollowAuthor() {
        try {
            yield ArticlesApis.unFollowAuthor(this.articleInfo.author.username)
            this.getClickedArticle(this.articleInfo.slug)
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *postFavoriteArticle() {
        try {
            const res = yield ArticlesApis.postFavoriteArticle(
                this.articleInfo.slug,
            )
            this.setArticleInfo(res.data.article)
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *deleteFavoriteArticle() {
        try {
            const res = yield ArticlesApis.deleteFavoriteArticle(
                this.articleInfo.slug,
            )
            this.setArticleInfo(res.data.article)
        } catch (e) {
            console.error(e.message)
        }
    }
}
