import { observable, action } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'
import { asyncAction } from 'mobx-utils'

export class YourFeeds {
    @observable public contents: any[] = []
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1
    @observable public dataState: string = 'loading'

    @asyncAction public *getArticles() {
        this.contents = []
        this.dataState = 'loading'
        try {
            const offset = (this.selectedPage - 1) * 6 + 1
            const res = yield ArticlesApis.getYourFeeds(offset)
            this.setArticles(res.data)
        } catch (e) {
            console.error(e.message)
        }
    }

    @action public setArticles(data: any) {
        this.contents = data.articles
        this.pageCount =
            data.articlesCount % 6 === 0
                ? data.articlesCount / 6
                : Math.floor(data.articlesCount / 6) + 1
        this.dataState = this.contents.length === 0 ? 'none' : 'done'
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
