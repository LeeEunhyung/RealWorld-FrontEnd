import { createContext } from 'react'
import { observable } from 'mobx'

class User {
    @observable isLogin: boolean
    @observable userInfo: any

    constructor() {
        this.isLogin = false
    }
}

const UserContext = createContext(new User())

export default UserContext
