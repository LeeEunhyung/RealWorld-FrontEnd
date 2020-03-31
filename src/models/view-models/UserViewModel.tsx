import { observable, action, configure } from 'mobx'

configure({ enforceActions: 'observed' })

export class User {
    @observable isLogin: boolean = false
    @observable selectedNaviMenu: string = 'Feed'
    @observable userInfo: any

    @action public setUserInfo(data: any) {
        this.userInfo = data
        this.setIsLogin()
        this.setUserImage()
    }

    @action public setFeed() {
        this.selectedNaviMenu = 'Feed'
    }

    @action public setYourFeed() {
        this.selectedNaviMenu = 'Your Feed'
    }

    @action public setIsLogin() {
        this.isLogin = localStorage.getItem('token') === null ? false : true
    }

    @action public setUserImage() {
        if (this.userInfo.image === null) {
            this.userInfo.image =
                'https://static.productionready.io/images/smiley-cyrus.jpg'
        }
    }
}
