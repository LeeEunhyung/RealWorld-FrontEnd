import { observable, action } from 'mobx'

export class User {
    @observable isLogin: boolean = false
    @observable selectedNaviMenu: string = 'Feed'
    @observable userInfo: any

    @action public setUserInfo(data: any) {
        this.userInfo = data
        this.setIsLogin()
    }

    @action public setIsLogin() {
        this.isLogin = localStorage.getItem('token') === null ? false : true
    }
}
