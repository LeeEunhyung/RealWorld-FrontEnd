import React from 'react'
import styled from 'styled-components'

import { Title } from '../components/Title'
import { Link } from 'react-router-dom'
import { LoginForm } from '../fragments/LoginForm'

const StyledSignin = styled.div`
    margin: 20px;
    background-color: #ffffff;
    width: 90%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    font-family: 'Source Sans Pro', sans-serif;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(https://live.staticflickr.com/7340/12389517865_a835a9cc5e_b.jpg);
    background-size: 900px;
    background-position: center center;
    & h1 {
        text-align: center;
        color: #ffffff;
        font-size: 3rem;
        margin: 10px 0 0;
    }
`

const StyledLink = styled.li`
    list-style: none;
    & a {
        color: #ff4501;
        text-decoration: none;
        font-size: 1rem;
        margin: 5px;
        display: block;
        text-align: center;
        font-weight: bolder;
    }
    & a:hover {
        text-decoration: underline;
    }
`

export function LoginPage() {
    return (
        <StyledSignin>
            <Title title="Sign In" />
            <StyledLink>
                <Link to="/register">Need an account?</Link>
            </StyledLink>
            <LoginForm />
        </StyledSignin>
    )
}
