import { observable, action } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'
import { asyncAction } from 'mobx-utils'

export class Articles {
    @observable public state: string = 'loading'

    @observable public articlesList: any[] = []
    @observable public pageNumberList: any[] = []

    @observable public selectedMenu: string = 'Feed'
    @observable public selectedTag: string = ''
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1

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
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }

    @action public setArticles(data: any) {
        this.articlesList = data.articles
        this.pageCount =
            data.articlesCount % 6 === 0
                ? data.articlesCount / 6
                : Math.floor(data.articlesCount / 6) + 1
        this.setPageNumberList()
        this.state = this.articlesList.length === 0 ? 'none' : 'done'
    }

    @action public setConfig() {
        const config: any = {}

        if (this.selectedMenu === 'Tag Feed') {
            config.params = {
                offset: (this.selectedPage - 1) * 6 + 1,
                limit: 6,
                tag: this.selectedTag,
            }
        } else {
            config.params = {
                offset: (this.selectedPage - 1) * 6 + 1,
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
        if (selectedPage === '<') {
            this.selectedPage = 1
        } else if (selectedPage === '>') {
            this.selectedPage = this.pageCount
        } else {
            this.selectedPage = Number(selectedPage)
        }
        this.getArticles()
    }

    @action public setPageNumberList() {
        let i = 0
        let count = 1

        this.pageNumberList[i++] = '<'
        while (i < this.pageCount + 1) {
            this.pageNumberList[i++] = count++
        }
        this.pageNumberList[i] = '>'
    }

    @action public setSelectedMenu(value: string) {
        this.articlesList = []
        this.pageNumberList = []
        this.selectedPage = 1
        this.selectedMenu = value.includes('Feed') ? value : 'Tag Feed'
        if (this.selectedMenu === 'Tag Feed') {
            this.selectedTag = value
        } else {
            this.selectedTag = ''
        }
        this.getArticles()
    }
}
