import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'https://conduit.productionready.io/api/',
})

export class ArticlesApis {
    static getArticles(selectedMenu: any, config: any) {
        if (selectedMenu.yourFeed) {
            return httpClient.get('articles/feed', config)
        } else {
            return httpClient.get('articles', config)
        }
    }

    static getTags() {
        return httpClient.get('tags')
    }

    static getClickedArticle(slug: string) {
        if (localStorage.getItem('token')) {
            return httpClient.get(`articles/${slug}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                },
            })
        } else {
            return httpClient.get(`articles/${slug}`)
        }
    }

    static followAuthor(username: string) {
        return httpClient.post(`profiles/${username}/follow`, null, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static unFollowAuthor(username: string) {
        return httpClient.delete(`profiles/${username}/follow`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static turnOnFavoriteButton(slug: string) {
        return httpClient.post(`articles/${slug}/favorite`, null, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static turnOffFavoriteButton(slug: string) {
        return httpClient.delete(`articles/${slug}/favorite`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static addComment(slug: string, body: string) {
        return httpClient.post(
            `articles/${slug}/comments`,
            {
                comment: {
                    body,
                },
            },
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                },
            },
        )
    }

    static deleteComment(slug: string, id: number) {
        return httpClient.delete(`articles/${slug}/comments/${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static getComments(slug: string) {
        if (localStorage.getItem('token')) {
            return httpClient.get(`articles/${slug}/comments`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                },
            })
        } else {
            return httpClient.get(`articles/${slug}/comments`)
        }
    }
}
