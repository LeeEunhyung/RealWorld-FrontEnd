import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'

const StyledButton = styled.input`
    background-color: #ff4501;
    color: #ffffff;
    border: none;
    text-align: center;
    font-size: 1rem;
`

export const LogoutButton = observer(() => {
    const user = useContext(UserContext)
    return (
        <StyledButton
            type="button"
            value="Logout"
            onClick={() => {
                localStorage.removeItem('token')
                user.setIsLogin()
            }}
        />
    )
})
