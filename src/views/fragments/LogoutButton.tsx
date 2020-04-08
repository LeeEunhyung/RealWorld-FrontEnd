import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import { FeedsContext } from '../../contexts/FeedsContext'

const StyledButton = styled.input`
    background-color: #ff4501;
    color: #ffffff;
    border: none;
    text-align: center;
    font-size: 1rem;
`

export const LogoutButton = observer(() => {
    const user = useContext(UserContext)
    const feeds = useContext(FeedsContext)
    let history = useHistory()
    return (
        <StyledButton
            type="button"
            value="Logout"
            onClick={() => {
                user.setLogout()
                feeds.getArticles()
                history.push('/')
            }}
        />
    )
})
