import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'https://conduit.productionready.io/api/',
})

export class UserApis {
    static checkLogin(email: string, password: string) {
        return httpClient.post('users/login', {
            user: {
                email,
                password,
            },
        })
    }

    static checkRegister(username: string, email: string, password: string) {
        return httpClient.post('users', {
            user: {
                username,
                email,
                password,
            },
        })
    }

    static getUserInfo() {
        return httpClient.get('user', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        })
    }
}
