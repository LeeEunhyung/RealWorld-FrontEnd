import { observable, action } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { UserApis } from '../../apis/UserApis'

export class User {
    @observable isLogin: boolean = false
    @observable userInfo: any

    @observable errorMessage: any = {}

    @observable state: string = 'loading'

    @observable isFeedSelected: boolean = true
    @observable isYourFeedSelected: boolean = false
    @observable isTagFeedSelected: boolean = false

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
            this.errorMessage = e.response.data.errors
        }

        return this.isLogin
    }

    @asyncAction public *checkLogin(email: string, password: string) {
        try {
            const res = yield UserApis.checkLogin(email, password)
            localStorage.setItem('token', res.data.user.token)
            this.isLogin = true
            this.getUserInfo()
        } catch (e) {
            this.errorMessage = e.response.data.errors
        }

        return this.isLogin
    }

    @asyncAction public *getUserInfo() {
        this.state = 'loading'
        try {
            const res = yield UserApis.getUserInfo()
            this.userInfo = res.data.user
            this.userInfo.image =
                this.userInfo.image === null
                    ? 'https://static.productionready.io/images/smiley-cyrus.jpg'
                    : this.userInfo.image
            this.state = 'done'
        } catch (e) {
            console.log(e.message)
            this.state = 'error'
        }
    }

    @action public resetErrorMessage() {
        this.errorMessage = {}
    }

    @action public setIsLogin() {
        if (localStorage.getItem('token') === null) {
            this.isLogin = false
        } else {
            this.isLogin = true
        }

        return this.isLogin
    }

    @action public setLogout() {
        localStorage.removeItem('token')
        this.isLogin = false
    }
}
