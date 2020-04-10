import { observable, action } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { ArticlesApis } from '../../apis/ArticlesApis'

export class Article {
    @observable articleInfo: any

    @observable followingValue: string = ''
    @observable favoritedValue: string = ''

    @observable commentList: any[] = []

    @observable state: string = 'loading'

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
        const headers = {
            Authorization: `Token ${localStorage.getItem('token')}`,
        }
        try {
            yield ArticlesApis.deleteArticle(slug, headers)
            this.state = 'done'
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }

    @asyncAction public *followAuthor() {
        try {
            yield ArticlesApis.followAuthor(this.articleInfo.author.username)
            this.getClickedArticle()
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *unFollowAuthor() {
        try {
            yield ArticlesApis.unFollowAuthor(this.articleInfo.author.username)
            this.getClickedArticle()
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *turnOnFavoriteButton(
        slug: string = this.articleInfo.slug,
    ) {
        try {
            const res = yield ArticlesApis.turnOnFavoriteButton(slug)
            this.setArticleInfo(res.data.article)
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *turnOffFavoriteButton(
        slug: string = this.articleInfo.slug,
    ) {
        try {
            const res = yield ArticlesApis.turnOffFavoriteButton(slug)
            this.setArticleInfo(res.data.article)
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
            console.log(e.message)
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
