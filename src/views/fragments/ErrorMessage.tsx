import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'

const StyledErrorMessage = styled.span`
    font-weight: bolder;
    color: #ffffff;
    text-align: center;
`

export const ErrorMessage = observer(() => {
    const user = useContext(UserContext)

    useEffect(function() {
        user.setErrorMessage()
    }, [])

    return (
        <StyledErrorMessage>
            {user.registerError.split(',').map(msg => {
                if (msg === '') return
                else
                    return (
                        <span key={msg}>
                            {msg}
                            <br />
                        </span>
                    )
            })}
            {user.loginError.split(',').map(msg => {
                if (msg === '') return
                else
                    return (
                        <span key={msg}>
                            {msg}
                            <br />
                        </span>
                    )
            })}
        </StyledErrorMessage>
    )
})
