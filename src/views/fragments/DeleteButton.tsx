import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { UserContext } from '../../contexts/UserContext'
import styled from 'styled-components'

interface IProps {
    author: string
    onClick: () => void
}

const StyledDeleteButton = styled.input`
    height: 40px;
    outline: none;
    border-radius: 10px;
    border: 1px solid #c8c8c8;
    color: #c8c8c8;
    background-color: #ffffff;
    &:hover {
        border: 1px solid #ffffff;
        color: #ffffff;
        background-color: #c8c8c8;
    }
`

export const DeleteButton = observer((props: IProps) => {
    const user = useContext(UserContext)

    return props.author === user.userInfo.username ? (
        <StyledDeleteButton
            type="button"
            value="delete"
            onClick={props.onClick}
        />
    ) : null
})
