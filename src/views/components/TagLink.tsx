import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled.a`
    flex-wrap: wrap;
    margin: 0.3rem;
    padding: 0.3rem;
    text-decoration: none;
    color: #ffffff;
    background-color: #ff4501;
    box-shadow: 3px 3px 5px 0 #bdb9a6, -3px -3px 5px 0 #fffefa;
    border-radius: 14.9px;
    font-size: 0.7rem;
`

interface IProps {
    value: string
    onClick: () => void
}

export function TagsLink(props: IProps) {
    return (
        <StyledLink
            as={Link}
            to={`/tag/${props.value}`}
            onClick={props.onClick}
        >
            {props.value}
        </StyledLink>
    )
}
