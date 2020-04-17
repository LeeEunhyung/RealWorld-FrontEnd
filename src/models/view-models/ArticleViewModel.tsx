import { observable, action } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { ArticlesApis } from '../../apis/ArticlesApis'

export class Article {
    @observable articleInfo: any

    @observable followingValue: string = ''
    @observable favoritedValue: string = ''

    @observable commentList: any[] = []

    @observable state: 'loading' | 'done' | 'none' | 'error' = 'loading'

    @asyncAction public *getClickedArticle(
        slug: string = this.articleInfo.slug,
    ) {
        this.state = 'loading'
        try {
            const res = yield ArticlesApis.getClickedArticle(slug)
            this.setArticleInfo(res.data.article)
            this.state = 'done'
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }

    @asyncAction public *deleteArticle(slug: string) {
        this.state = 'loading'
        try {
            yield ArticlesApis.deleteArticle(slug)
            this.state = 'done'
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }

    @asyncAction public *followAuthor() {
        try {
            const res = yield ArticlesApis.followAuthor(
                this.articleInfo.author.username,
            )
            this.setButtonValue(
                res.data.profile.following,
                this.articleInfo.favorited,
            )
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *unFollowAuthor() {
        try {
            const res = yield ArticlesApis.unFollowAuthor(
                this.articleInfo.author.username,
            )
            this.setButtonValue(
                res.data.profile.following,
                this.articleInfo.favorited,
            )
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *turnOnFavoriteButton(
        slug: string = this.articleInfo.slug,
    ) {
        try {
            const res = yield ArticlesApis.turnOnFavoriteButton(slug)
            this.setButtonValue(
                this.articleInfo.author.fallowing,
                res.data.article.favorited,
                res.data.article.favoritesCount,
            )
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *turnOffFavoriteButton(
        slug: string = this.articleInfo.slug,
    ) {
        try {
            const res = yield ArticlesApis.turnOffFavoriteButton(slug)
            this.setButtonValue(
                this.articleInfo.author.fallowing,
                res.data.article.favorited,
                res.data.article.favoritesCount,
            )
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *addComment(body: string) {
        try {
            yield ArticlesApis.addComment(this.articleInfo.slug, body)
            this.getComments()
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *deleteComment(id: number) {
        try {
            yield ArticlesApis.deleteComment(this.articleInfo.slug, id)
            this.getComments()
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *getComments(slug: string = this.articleInfo.slug) {
        try {
            const res = yield ArticlesApis.getComments(slug)
            this.commentList = []
            this.commentList = res.data.comments
        } catch (e) {
            console.error(e.message)
        }
    }

    @action public setArticleInfo(data: any) {
        this.articleInfo = data
        this.setButtonValue(
            this.articleInfo.author.following,
            this.articleInfo.favorited,
        )
    }

    @action public setButtonValue(
        follow: boolean,
        favorite: boolean,
        favoritesCount: number = this.articleInfo.favoritesCount,
    ) {
        this.articleInfo.author.following = follow
        this.articleInfo.favorited = favorite
        this.followingValue = follow
            ? `+ Unfollow ${this.articleInfo.author.username}`
            : `+ Follow ${this.articleInfo.author.username}`

        this.favoritedValue = favorite
            ? `♥ Unfavorite Article (${favoritesCount})`
            : `♥ Favorite Article (${favoritesCount})`
    }
}
