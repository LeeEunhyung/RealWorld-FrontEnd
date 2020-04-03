import { observable, action } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'
import { asyncAction } from 'mobx-utils'

export class TagFeeds {
    @observable public contents: any[] = []
    @observable public selectedPage: number = 1
    @observable public pageCount: number = 1
    @observable public state: string = 'loading'
    @observable public selectedTag: string = ''

    @action setSelectedTag(tag: string) {
        this.selectedTag = tag
    }

    @asyncAction public *getArticlesByTag() {
        this.contents = []
        this.state = 'loading'
        try {
            const offset = (this.selectedPage - 1) * 6 + 1
            const res = yield ArticlesApis.getArticlesbyTag(
                offset,
                this.selectedTag,
            )
            this.setArticles(res.data)
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }

    @action public setArticles(data: any) {
        this.contents = data.articles
        this.pageCount =
            data.articlesCount % 6 === 0
                ? data.articlesCount / 6
                : Math.floor(data.articlesCount / 6) + 1
        this.state = this.contents.length === 0 ? 'none' : 'done'
    }

    @action public setSelectedPage = (selectedPage: string | number) => {
        if (selectedPage === '<') {
            this.selectedPage = 1
        } else if (selectedPage === '>') {
            this.selectedPage = this.pageCount
        } else {
            this.selectedPage = Number(selectedPage)
        }
        this.getArticlesByTag()
    }

    @action public resetSelectedPage() {
        this.selectedPage = 1
    }
}
