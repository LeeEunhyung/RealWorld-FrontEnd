import React from 'react'
import styled from 'styled-components'
import { UserInfo } from '../fragments/UserInfo'
import { Link } from 'react-router-dom'

const StyledMain = styled.main`
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const StyledLink = styled.a`
    text-decoration: none;
    text-align: center;
    width: 90%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ff4501;
    font-size: 18px;
    color: #ff4501;
    font-weight: bolder;
    margin: 8px 8px 16px;
    &:hover {
        background-color: #ff4501;
        color: #ffffff;
    }
`

export function ProfilePage() {
    return (
        <StyledMain>
            <UserInfo />
            <StyledLink as={Link} to="/settings">
                Edit Profile Settings
            </StyledLink>
        </StyledMain>
    )
}
