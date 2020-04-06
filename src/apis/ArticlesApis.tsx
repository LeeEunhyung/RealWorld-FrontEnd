import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'https://conduit.productionready.io/api/',
})

export class ArticlesApis {
    static getFeeds(offset: number) {
        if (localStorage.getItem('token')) {
            return httpClient.get('articles', {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                },
                params: {
                    offset,
                    limit: 6,
                },
            })
        } else {
            return httpClient.get('articles', {
                params: {
                    offset,
                    limit: 6,
                },
            })
        }
    }

    static getYourFeeds(offset: number) {
        return httpClient.get('articles/feed', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
            params: {
                offset,
                limit: 6,
            },
        })
    }

    static getTags() {
        return httpClient.get('tags')
    }

    static getArticlesbyTag(offset: number, tag: string) {
        return httpClient.get('articles', {
            params: {
                offset,
                limit: 6,
                tag,
            },
        })
    }

    static getFavoritedArticles(offset: number, favorited: string) {
        return httpClient.get('articles', {
            params: {
                offset,
                limit: 6,
                favorited,
            },
        })
    }

    static getClickedArticle(slug: string) {
        return httpClient.get(`articles/${slug}`)
    }

    static postFavoriteArticle(slug: string) {
        return httpClient.post(`articles/${slug}/favorite`, null, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static deleteFavoriteArticle(slug: string) {
        return httpClient.delete(`articles/${slug}/favorite`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static getComments(slug: string) {
        return httpClient.get(`articles/${slug}/comments`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }
}
