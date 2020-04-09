import { observable, action } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { UserApis } from '../../apis/UserApis'

export class User {
    @observable isLogin: boolean = false
    @observable userInfo: any

    @observable loginError: string = ''
    @observable registerError: string = ''

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
            this.registerError = JSON.stringify(e.response.data.errors)
            this.registerError = this.replaceErrorMessage(this.registerError)
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
            this.loginError = JSON.stringify(e.response.data.errors)
            this.loginError = this.replaceErrorMessage(this.loginError)
        }

        return this.isLogin
    }

    @asyncAction public *getUserInfo() {
        this.state = 'loading'
        try {
            const res = yield UserApis.getUserInfo()
            this.userInfo = res.data.user
            this.userInfo.image =
                'https://static.productionready.io/images/smiley-cyrus.jpg' ??
                this.userInfo.image
            this.state = 'done'
        } catch (e) {
            console.log(e.message)
            this.state = 'error'
        }
    }

    @action public replaceErrorMessage(errorMessage: string) {
        errorMessage = errorMessage
            .replace(/[~!@#$%^&*()_+|<>?{}"]/g, '')
            .replace(/\[/g, '')
            .replace(/\]/g, '')
            .replace(/:/g, ' ')

        return errorMessage
    }

    @action public setErrorMessage() {
        this.loginError = ''
        this.registerError = ''
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
