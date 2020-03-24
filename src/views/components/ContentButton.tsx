import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.input`
    align-self: flex-end;
    margin: 0.5rem;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 24px;
    box-shadow: inset 1px 1px 1px 0 rgba(108, 108, 108, 0.4),
        inset -1px -1px 1px 0 rgba(184, 184, 184, 0.1);
    outline: none;
    background-color: #ffffff;
    color: #ff4501;
    text-align: center;
    :hover {
        background-color: #ff4501;
        color: #ffffff;
    }
    &.true {
        background-color: #ff4501;
        color: #ffffff;
    }
`

interface IProps {
    favorited: boolean
}

function ContentButton(props: IProps) {
    return (
        <StyledButton
            className={String(props.favorited)}
            type="button"
            value="♡"
        />
    )
}

export default ContentButton
