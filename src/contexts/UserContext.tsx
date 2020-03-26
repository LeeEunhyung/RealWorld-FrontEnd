import { createContext } from 'react'
import { observable } from 'mobx'
import axios from 'axios'

class User {
    constructor() {
        this.setUserInfo()
    }

    public setUserInfo = () => {
        axios({
            url: `https://conduit.productionready.io/api/user`,
            method: 'GET',
        })
            .then(function(response) {
                console.log(response.data)
            })
            .catch(function(err) {
                console.log(err)
            })
    }
}

const UserContext = createContext(new User())

export default UserContext
