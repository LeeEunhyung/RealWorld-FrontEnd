import axios from 'axios'

export class UserApis {
    static checkLogin(inputEmail: string, inputPassword: string) {
        return axios({
            url: 'https://conduit.productionready.io/api/users/login',
            method: 'POST',
            data: {
                user: {
                    email: inputEmail,
                    password: inputPassword,
                },
            },
        })
    }

    static checkRegister(
        inputUserName: string,
        inputEmail: string,
        inputPassword: string,
    ) {
        return axios({
            url: 'https://conduit.productionready.io/api/users',
            method: 'POST',
            data: {
                user: {
                    username: inputUserName,
                    email: inputEmail,
                    password: inputPassword,
                },
            },
        })
    }

    static getUserInfo() {
        return axios({
            url: `https://conduit.productionready.io/api/user`,
            method: 'GET',
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }
}
