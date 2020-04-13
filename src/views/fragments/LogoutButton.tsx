import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledButton = styled.input`
    width: 90%;
    height: 50px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color: #000000;
    font-size: 18px;
    font-family: inherit;
    color: #ffffff;
    font-weight: bolder;
    margin: 8px 8px 16px;
`

export const LogoutButton = observer(() => {
    const user = useContext(UserContext)
    const articles = useContext(ArticlesContext)
    let history = useHistory()
    return (
        <StyledButton
            type="button"
            value="Logout"
            onClick={() => {
                user.setLogout()
                articles.setSelectedMenu('Feed')
                history.push('/')
            }}
        />
    )
})
