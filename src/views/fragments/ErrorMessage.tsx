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
            {user.errorMessage.username && (
                <span>
                    {`- username ${user.errorMessage.username}.`}
                    <br />
                </span>
            )}
            {user.errorMessage.email && (
                <span>
                    {`- email ${user.errorMessage.email}.`}
                    <br />
                </span>
            )}
            {user.errorMessage.password && (
                <span>
                    {`- password ${user.errorMessage.password}.`}
                    <br />
                </span>
            )}
            {user.errorMessage['email or password'] && (
                <span>
                    {`- email or password ${user.errorMessage['email or password']}.`}
                    <br />
                </span>
            )}
        </StyledErrorMessage>
    )
})
