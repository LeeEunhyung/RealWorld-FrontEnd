import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
    url: '/api',
})

export class ArticlesApis {
    static getFeeds(offset: number) {
        return httpClient.get('/articles', {
            params: {
                offset,
                limit: 6,
            },
        })
    }

    static getYourFeeds(offset: number) {
        return httpClient.get('/articles/feed', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
            params: {
                offset,
                limit: 6,
            },
        })
    }
}
