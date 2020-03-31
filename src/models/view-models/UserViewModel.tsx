import { observable, action } from 'mobx'

export class User {
    @observable isLogin: boolean = false
    @observable selectedNaviMenu: string = 'Feed'
    @observable userInfo: any

    constructor() {
        this.setIsLogin()
    }

    @action public setIsLogin() {
        this.isLogin = localStorage.getItem('token') === null ? false : true
    }
}
