import { observable } from 'mobx'
import { createContext } from 'react'
import axios from 'axios'

class Articles {
    @observable public contents: any[] = []
    @observable public naviMenu: string = 'Feed'
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1

    constructor() {
        this.getArticles()
    }

    public getArticles = async () => {
        await axios
            .get(
                `https://conduit.productionready.io/api/articles?offset=:this.selectedPage?limit=6`,
            )
            .then(response => {
                this.contents = response.data.articles
                this.pageCount =
                    this.contents.length % 6 === 0
                        ? this.contents.length / 6
                        : Math.floor(this.contents.length / 6) + 1
            })
            .catch(err => {
                console.log(err)
            })
    }

    // @computed get setContents() {
    //     if (this.naviMenu === 'Your Feed') {
    //         this.contents = mydata.articles
    //     }

    //     return this.contents
    // }

    /*@action public setContents() {
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
    }*/
}

// const data = axios
//     .request({
//         method: 'GET',
//         url: `https://conduit.productionready.io/api/articles`,
//         params: { msg: 'hi' },
//     })
//     .then(response => response.data.articles)

const ArticlesContext = createContext(new Articles())

export default ArticlesContext
