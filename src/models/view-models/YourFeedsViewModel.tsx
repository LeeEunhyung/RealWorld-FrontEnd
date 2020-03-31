import { observable, action } from 'mobx'
import axios from 'axios'

export class YourFeeds {
    @observable public contents: any[] = []
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1

    constructor() {
        this.getArticles()
    }

    @action public getArticles = async () => {
        const _offset = (this.selectedPage - 1) * 6 + 1
        await axios({
            //url: `https://conduit.productionready.io/api/articles?offset=${_offset}&limit=6&author=jake`,
            url: `https://conduit.productionready.io/api/articles?offset=${_offset}&limit=6&author=jake`,
            method: 'GET',
        })
            .then(response => {
                this.contents = response.data.articles
                this.setPageCount(response.data.articlesCount)
            })
            .catch(err => {
                console.log(err)
            })
    }

    @action public setPageCount = (articlesCount: number) => {
        if (articlesCount % 6 === 0) {
            this.pageCount = articlesCount / 6
        } else {
            this.pageCount = Math.floor(articlesCount / 6) + 1
        }
    }

    @action public setClickedNumber = (clickedNumber: string | number) => {
        if (clickedNumber === '<') {
            this.selectedPage = 1
        } else if (clickedNumber === '>') {
            this.selectedPage = this.pageCount
        } else {
            this.selectedPage = Number(clickedNumber)
        }
        this.getArticles()
    }
}
