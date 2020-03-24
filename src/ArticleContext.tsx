import { observable, action } from 'mobx'
import { createContext } from 'react'
import data from './data/data.json'

class ArticleClass {
    public data: any
    @observable public contents: any[]
    @observable public naviMenu: string = 'Feed'
    @observable public userName: string
    constructor(data: any, user: string) {
        this.data = data
        this.contents = data.articles
        this.userName = user
    }

    @action public setContents() {
        if (this.naviMenu === 'Feed') {
            this.contents = this.data.articles
        } else if (this.naviMenu === 'Your Feed') {
            let i = 0
            this.contents = []
            while (i < this.data.articles.length) {
                if (this.data.articles[i].author.username === this.userName) {
                    this.contents.push(this.data.articles[i])
                }
                i = i + 1
            }
        }
    }
}

const ArticleContext = createContext(new ArticleClass(data, 'cat'))

export default ArticleContext
