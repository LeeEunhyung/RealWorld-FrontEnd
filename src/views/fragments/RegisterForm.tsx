import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

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

export function RegisterForm() {
    let inputUsername: string = ''
    let inputEmail: string = ''
    let inputPassword: string = ''
    return (
        <StyledForm>
            <input
                type="text"
                placeholder="Username"
                onChange={function(e) {
                    inputUsername = e.target.value
                }}
            />
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
                value="Sign up"
                onClick={function() {
                    axios({
                        url: 'https://conduit.productionready.io/api/users',
                        method: 'POST',
                        data: {
                            user: {
                                username: inputUsername,
                                email: inputEmail,
                                password: inputPassword,
                            },
                        },
                    })
                        .then(function(response) {
                            localStorage.setItem(
                                'username',
                                response.data.user.username,
                            )
                            window.location.href = '/'
                        })
                        .catch(function() {
                            alert(
                                'username or email or password does not match the format.',
                            )
                        })
                }}
            />
        </StyledForm>
    )
}
