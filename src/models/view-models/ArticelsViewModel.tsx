import { observable, action } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'
import { asyncAction } from 'mobx-utils'

export class Articles {
    @observable public state: string = 'loading'

    @observable public articlesList: any[] = []
    @observable public pageNumberList: any[] = []

    @observable public selectedMenu: any = {
        feed: true,
        yourFeed: false,
        tagFeed: false,
    }
    @observable public selectedTag: string = ''
    @observable public selectedPage: number = 1

    @observable public pageCount: number = 1
    @observable public pageRange: number = 1

    @asyncAction public *getArticles() {
        this.state = 'loading'
        const config = this.setConfig()
        try {
            const res = yield ArticlesApis.getArticles(
                this.selectedMenu,
                config,
            )
            this.articlesList = []
            this.setArticles(res.data)
            console.log(this.articlesList)
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }

    @action public setArticles(data: any) {
        this.articlesList = data.articles
        this.pageCount = this.setNumberRange(data.articlesCount)
        this.pageRange = this.setNumberRange(this.selectedPage)
        this.setPageNumberList()
        this.state = this.articlesList.length === 0 ? 'none' : 'done'
    }

    @action setNumberRange(n: number) {
        return n % 6 === 0 ? n / 6 : Math.floor(n / 6) + 1
    }

    @action public setConfig() {
        const config: any = {}

        if (this.selectedMenu.tagFeed) {
            config.params = {
                offset: (this.selectedPage - 1) * 6,
                limit: 6,
                tag: this.selectedTag,
            }
        } else {
            config.params = {
                offset: (this.selectedPage - 1) * 6,
                limit: 6,
            }
        }

        if (localStorage.getItem('token')) {
            config.headers = {
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        }

        return config
    }

    @action public setSelectedPage = (selectedPage: string | number) => {
        if (selectedPage === '<' || selectedPage === '...') {
            if (this.pageRange > 1) {
                this.pageRange--
                this.setPageNumberList()
            }
        } else if (selectedPage === '>' || selectedPage === '....') {
            if (this.pageRange < this.setNumberRange(this.pageCount)) {
                this.pageRange++
                this.setPageNumberList()
            }
        } else {
            this.selectedPage = Number(selectedPage)
            this.getArticles()
        }
    }

    @action public setPageNumberList() {
        this.pageNumberList = []
        let i = 0
        let pageNum = 1
        let count = 6

        if (this.pageRange > 1) {
            this.pageNumberList[i++] = 1
            this.pageNumberList[i++] = '...'
        }

        while (pageNum <= count) {
            this.pageNumberList[i++] = pageNum + (this.pageRange - 1) * count
            pageNum++
            if (pageNum + (this.pageRange - 1) * count > this.pageCount) break
        }

        if (this.pageRange < this.setNumberRange(this.pageCount)) {
            this.pageNumberList[i++] = '....'
            this.pageNumberList[i++] = this.pageCount
        }
    }

    @action public setSelectedMenu(value: string) {
        this.pageNumberList = []
        this.articlesList = []
        this.selectedPage = 1
        if (value === 'Feed') {
            this.selectedMenu = { feed: true, yourFeed: false, tagFeed: false }
        } else if (value === 'Your Feed') {
            this.selectedMenu = { feed: false, yourFeed: true, tagFeed: false }
        } else {
            this.selectedMenu = { feed: false, yourFeed: false, tagFeed: true }
        }

        if (this.selectedMenu.tagFeed) {
            this.selectedTag = value
        } else {
            this.selectedTag = ''
        }
        this.getArticles()
    }
}
