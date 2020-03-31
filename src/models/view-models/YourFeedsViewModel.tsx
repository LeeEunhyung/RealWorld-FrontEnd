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
            this.pageCount =
                response.data.articlesCount % 6 === 0
                    ? response.data.articlesCount / 6
                    : Math.floor(response.data.articlesCount / 6) + 1
        })
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
