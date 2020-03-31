import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { UserContext } from '../../contexts/UserContext'

import { UserApis } from '../../apis/UserApis'

const StyledForm = styled.form`
    width: 90%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    & input[type='text'],
    & input[type='password'] {
        outline: none;
        height: 50px;
        width: 100%;
        border: 1px solid #ffffff;
        border-radius: 24px;
        font-size: 1.2rem;
        text-indent: 1rem;
        background-color: rgba(0, 0, 0, 0);
        color: #ffffff;
        margin: 8px;
    }
    & input[type='button'] {
        width: 100%;
        height: 50px;
        outline: none;
        border-radius: 25px;
        border: 1px solid #ff4501;
        font-size: 18px;
        font-family: inherit;
        background-color: white;
        color: #ff4501;
        font-weight: bolder;
        background-color: rgba(0, 0, 0, 0);
        margin: 8px 8px 16px;
    }
    & input[type='button']:hover {
        background-color: #ff4501;
        color: white;
    }
    & input::placeholder {
        color: rgb(209, 209, 209);
        text-indent: 1rem;
    }
`

export const LoginForm = observer(() => {
    const user = useContext(UserContext)
    let inputEmail: string = ''
    let inputPassword: string = ''
    return (
        <StyledForm>
            <input
                type="text"
                placeholder="Email"
                onChange={function(e) {
                    inputEmail = e.target.value
                }}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={function(e) {
                    inputPassword = e.target.value
                }}
            />
            <input
                type="button"
                value="Sign in"
                onClick={async () => {
                    await UserApis.checkLogin(inputEmail, inputPassword)
                        .then(function(response) {
                            localStorage.setItem(
                                'token',
                                response.data.user.token,
                            )
                            window.location.href = '/home'
                        })
                        .catch(function(err) {
                            alert(err)
                        })

                    await UserApis.getUserInfo()
                        .then(function(response) {
                            user.userInfo = response.data.user
                            user.setIsLogin()
                        })
                        .catch(function(err) {
                            alert(err)
                        })
                }}
            />
        </StyledForm>
    )
})
