import axios from 'axios'

export class ArticlesApis {
    static getArticles(_offset: number) {
        return axios.get(
            `https://conduit.productionready.io/api/articles?offset=${_offset}&limit=6`,
        )
    }
}
