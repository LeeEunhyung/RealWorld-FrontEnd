import { observable, action } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'

export class YourFeeds {
    @observable public contents: any[] = []
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1

    @action public getArticles = async () => {
        const _offset = (this.selectedPage - 1) * 6 + 1
        await ArticlesApis.getYourFeeds(_offset).then(response => {
            this.contents = response.data.articles
            this.setPageCount(response.data.articlesCount)
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
