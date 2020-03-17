import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.input`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 25.9px;
    box-shadow: inset 1px 1px 1px 0 rgba(108, 108, 108, 0.4),
        inset -1px -1px 1px 0 rgba(184, 184, 184, 0.1);
    outline: none;
    margin: 4px;
    &.arrow {
        background-color: #000000;
        color: #ffffff;
    }
    &.number {
        background-color: #ffffff;
        color: #000000;
    }
`

interface IProps {
    value: string
    className: string
}

function ContentButton(props: IProps) {
    return (
        <StyledButton
            className={props.className}
            type="button"
            value={props.value}
        />
    )
}

export default ContentButton