import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'

const StyledErrorMessage = styled.span`
    font-weight: bolder;
    color: #ffffff;
`

export const ErrorMessage = observer(() => {
    const user = useContext(UserContext)
    return (
        <StyledErrorMessage>
            {user.registerError.split(',').map(msg => {
                if (msg === '') return null
                else
                    return (
                        <span key={msg}>
                            - {msg}
                            <br />
                        </span>
                    )
            })}
            {user.loginError.split(',').map(msg => {
                if (msg === '') return null
                else
                    return (
                        <span key={msg}>
                            - {msg}
                            <br />
                        </span>
                    )
            })}
        </StyledErrorMessage>
    )
})
