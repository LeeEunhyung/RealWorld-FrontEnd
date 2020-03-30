import { observable } from 'mobx'

export class User {
    @observable isLogin: boolean
    @observable userInfo: any

    constructor() {
        this.isLogin = false
    }
}
