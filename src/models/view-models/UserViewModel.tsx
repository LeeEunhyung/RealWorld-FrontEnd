import { observable, action, configure } from 'mobx'
import { asyncAction } from 'mobx-utils'
import { UserApis } from '../../apis/UserApis'

configure({ enforceActions: 'observed' })

export class User {
    @observable isLogin: boolean = false
    @observable selectedNaviMenu: string = 'Feed'
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
            this.setUserInfo()
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *checkLogin(email: string, password: string) {
        try {
            const res = yield UserApis.checkLogin(email, password)
            localStorage.setItem('token', res.data.user.token)
            this.isLogin = true
            this.setUserInfo()
        } catch (e) {
            console.error(e.message)
        }
    }

    @asyncAction public *setUserInfo() {
        try {
            const res = yield UserApis.getUserInfo()
            this.userInfo = res.data
            this.userInfo.image =
                this.userInfo.image === null
                    ? 'https://static.productionready.io/images/smiley-cyrus.jpg'
                    : this.userInfo.imamge
        } catch (e) {
            console.error(e.message)
        }
    }

    @action public setFeed() {
        this.selectedNaviMenu = 'Feed'
    }

    @action public setYourFeed() {
        this.selectedNaviMenu = 'Your Feed'
    }

    @action public setLogout() {
        this.isLogin = false
    }
}
