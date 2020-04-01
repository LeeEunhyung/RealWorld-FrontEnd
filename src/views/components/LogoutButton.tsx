import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'

const StyledButton = styled.input`
    background-color: #ff4501;
    color: #ffffff;
    border: none;
    text-align: center;
    font-size: 1rem;
`

export const LogoutButton = observer(() => {
    const user = useContext(UserContext)
    let history = useHistory()
    return (
        <StyledButton
            type="button"
            value="Logout"
            onClick={() => {
                localStorage.removeItem('token')
                user.setLogout()
                history.push('/home')
            }}
        />
    )
})
