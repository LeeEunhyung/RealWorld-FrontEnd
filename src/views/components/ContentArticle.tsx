import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
    width: 290px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const StyledTitle = styled.h1`
    display: block;
    font-size: 1.5rem;
    text-align: left;
    margin: 0 0.5rem 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const StyledDesc = styled.p`
    text-align: left;
    margin: 0.5rem 0.5rem 0;
    font-size: 0.83rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 4.8rem;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

interface IProps {
    title: string
    desc: string
}

export function ContentArticle(props: IProps) {
    return (
        <StyledArticle>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDesc>{props.desc}</StyledDesc>
        </StyledArticle>
    )
}
