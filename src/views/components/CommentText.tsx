import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCommentText = styled.div`
    display: flex;
    flex-direction: row;
    span {
        display: block;
        font-size: 0.8rem;
        color: #c8c8c8;
    }
    img {
        margin: 0 8px 0 0;
        width: 40px;
        height: 40px;
        border-radius: 70px;
    }
`

const StyledBody = styled.div`
    width: 70%;
    padding-left: 16px;
    word-wrap: break-word;
`

const StyledAuthor = styled.div`
    padding-right: 16px;
    display: flex;
    flex-direction: row;
    border-right: 1px dotted #c8c8c8;
`

interface IProps {
    data: any
}

export function CommentText(props: IProps) {
    return (
        <StyledCommentText>
            <StyledAuthor>
                <Link to="/profile">
                    <img
                        src={props.data.author.image}
                        alt={props.data.author.username}
                    />
                </Link>
                <div>
                    <Link to="/profile">{props.data.author.username}</Link>
                    <span>{String(props.data.createdAt).substr(0, 10)}</span>
                </div>
            </StyledAuthor>
            <StyledBody>{props.data.body}</StyledBody>
        </StyledCommentText>
    )
}
