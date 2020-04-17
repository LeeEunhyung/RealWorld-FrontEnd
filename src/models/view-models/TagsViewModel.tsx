import { observable } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'
import { asyncAction } from 'mobx-utils'

export class Tags {
    @observable public state: 'loading' | 'done' | 'none' | 'error' = 'loading'
    @observable public tagsList: string[] = []

    @asyncAction public *getTags() {
        this.state = 'loading'
        try {
            const res = yield ArticlesApis.getTags()
            this.tagsList = []
            this.tagsList = res.data.tags
            this.state = 'done'
        } catch (e) {
            console.error(e.message)
            this.state = 'error'
        }
    }
}
