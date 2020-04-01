import { observable, action } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { UserApis } from '../../apis/UserApis'

export class User {
    @observable isLogin: boolean = false
    @observable selectedNaviMenu: string = 'Feed'
    @observable isFeedSelected: string = 'yes'
    @observable isYourFeedSelected: string = 'no'
    @observable userInfo: any

    @asyncAction public *checkRegister(
        username: string,
        email: string,
        password: string,
    ) {
        try {
            const res = yield UserApis.checkRegister(username, email, password)
            localStorage.setItem('token', res.data.user.token)
            this.isLogin = true
            this.getUserInfo()
        } catch (e) {
            alert(e.message)
        }
    }

    @asyncAction public *checkLogin(email: string, password: string) {
        try {
            const res = yield UserApis.checkLogin(email, password)
            localStorage.setItem('token', res.data.user.token)
            this.isLogin = true
            this.getUserInfo()
        } catch (e) {
            alert(e.message)
        }
    }

    @asyncAction public *getUserInfo() {
        try {
            const res = yield UserApis.getUserInfo()
            this.userInfo = res.data.user
            this.userInfo.image =
                this.userInfo.image === null
                    ? 'https://static.productionready.io/images/smiley-cyrus.jpg'
                    : this.userInfo.imamge
        } catch (e) {
            console.error(e.message)
        }
    }

    @action public setIsLogin() {
        if (localStorage.getItem('token') === null) {
            this.isLogin = false
        } else {
            this.isLogin = true
        }
    }

    @action public setFeed() {
        this.selectedNaviMenu = 'Feed'
        this.isFeedSelected = 'yes'
        this.isYourFeedSelected = 'no'
    }

    @action public setYourFeed() {
        this.selectedNaviMenu = 'Your Feed'
        this.isYourFeedSelected = 'yes'
        this.isFeedSelected = 'no'
    }

    @action public setLogout() {
        localStorage.removeItem('token')
        this.isLogin = false
    }
}
