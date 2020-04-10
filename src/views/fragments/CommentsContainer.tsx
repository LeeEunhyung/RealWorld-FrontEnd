import React from 'react'
import styled from 'styled-components'
import { CommentForm } from './CommentForm'
import { CommentsList } from './CommentsList'

const StyledCommentsContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
`

export function CommentsContainer() {
    return (
        <StyledCommentsContainer>
            <CommentForm />
            <CommentsList />
        </StyledCommentsContainer>
    )
}
