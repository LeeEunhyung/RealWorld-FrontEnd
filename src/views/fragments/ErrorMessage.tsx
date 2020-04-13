import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../contexts/UserContext'
import { observer } from 'mobx-react'

const StyledErrorMessage = styled.span`
    font-weight: bolder;
    color: ${props => props.color};
`

interface IProps {
    color: string
}

export const ErrorMessage = observer((props: IProps) => {
    const user = useContext(UserContext)
    return (
        <StyledErrorMessage color={props.color}>
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
