import { observable } from 'mobx'
import { ArticlesApis } from '../../apis/ArticlesApis'
import { asyncAction } from 'mobx-utils'

export class Articles {
    @observable public tagsList: string[] = []

    @asyncAction public *getTags() {
        try {
            this.tagsList = []
            const res = yield ArticlesApis.getTags()
            this.tagsList = res.data.tags
        } catch (e) {
            console.error(e.message)
        }
    }
}
