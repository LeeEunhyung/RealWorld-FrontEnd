import { observable, action } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'

export class Feeds {
    @observable public contents: any[] = []
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1
    @observable public articlesCount: number = 0

    constructor() {
        this.getArticles()
    }

    @action public getArticles = async () => {
        const _offset = (this.selectedPage - 1) * 6 + 1
        await ArticlesApis.getArticles(_offset)
            .then(response => {
                this.contents = response.data.articles
                this.articlesCount = response.data.articlesCount
                this.setPageCount()
            })
            .catch(err => {
                console.log(err)
            })
    }

    @action public setPageCount = () => {
        if (this.articlesCount % 6 === 0) {
            this.pageCount = this.articlesCount / 6
        } else {
            this.pageCount = Math.floor(this.articlesCount / 6) + 1
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
