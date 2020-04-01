import { observable, action, configure } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'

configure({ enforceActions: 'observed' })

export class YourFeeds {
    @observable public contents: any[] = []
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1

    @action public getArticles = async () => {
        const _offset = (this.selectedPage - 1) * 6 + 1
        await ArticlesApis.getYourFeeds(_offset)
            .then(response => {
                this.setArticles(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    @action public setArticles(data: any) {
        this.contents = data.articles
        this.pageCount =
            data.articlesCount % 6 === 0
                ? data.articlesCount / 6
                : Math.floor(data.articlesCount / 6) + 1
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
