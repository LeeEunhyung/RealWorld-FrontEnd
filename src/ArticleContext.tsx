import { observable, action } from 'mobx'
import { createContext } from 'react'
import data from './data/data.json'

class ArticleClass {
    public articles: any[]
    @observable public contents: any[]
    @observable public userName: string
    @observable public naviMenu: string = 'Feed'
    @observable public selectedPage: number = 1
    @observable public pageCount: number

    constructor(data: any, user: string) {
        this.articles = data.articles
        this.contents = data.articles
        this.userName = user
        this.pageCount =
            this.contents.length % 6 === 0
                ? this.contents.length / 6
                : Math.floor(this.contents.length / 6) + 1
    }

    @action public setContents() {
        if (this.naviMenu === 'Feed') {
            this.contents = this.articles
        } else if (this.naviMenu === 'Your Feed') {
            this.selectedPage = 1
            let i = 0
            this.contents = []
            while (i < this.articles.length) {
                if (this.articles[i].author.username === this.userName) {
                    this.contents.push(this.articles[i])
                }
                i = i + 1
            }
        }
        this.pageCount =
            this.contents.length % 6 === 0
                ? this.contents.length / 6
                : Math.floor(this.contents.length / 6) + 1
    }
}

const ArticleContext = createContext(new ArticleClass(data, 'cat'))

export default ArticleContext
