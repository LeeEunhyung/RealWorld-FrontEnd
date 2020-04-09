import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledButton = styled.input`
    background-color: #ff4501;
    color: #ffffff;
    border: none;
    text-align: center;
    font-size: 1rem;
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
