import { observable } from 'mobx'
import axios from 'axios'

export class Articles {
    @observable public contents: any[] = []
    @observable public naviMenu: string = 'Feed'
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1

    constructor() {
        this.getArticles()
    }

    public getArticles = () => {
        const _offset = (this.selectedPage - 1) * 6 + 1
        const url =
            this.naviMenu === 'Feed'
                ? `https://conduit.productionready.io/api/articles?offset=${_offset}&limit=6`
                : `https://conduit.productionready.io/api/articles?offset=${_offset}&limit=6&author=jake`
        axios({ url: url, method: 'GET' })
            .then(response => {
                this.contents = response.data.articles
                this.pageCount =
                    response.data.articlesCount % 6 === 0
                        ? response.data.articlesCount / 6
                        : Math.floor(response.data.articlesCount / 6) + 1
            })
            .catch(err => {
                console.log(err)
            })
    }
}
