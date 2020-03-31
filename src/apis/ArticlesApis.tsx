import axios from 'axios'

export class ArticlesApis {
    static getListArticles(_offset: number) {
        return axios({
            url: `https://conduit.productionready.io/api/articles?offset=${_offset}&limit=6`,
            method: 'GET',
        })
    }
    static getFeeds(_offset: number) {
        return axios({
            url: `https://conduit.productionready.io/api/articles/feed?offset=${_offset}&limit=6`,
            method: 'GET',
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }

    static getYourFeeds(_offset: number) {
        return axios({
            url: `https://conduit.productionready.io/api/articles/feed?offset=${_offset}&limit=6`,
            method: 'GET',
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }
}
