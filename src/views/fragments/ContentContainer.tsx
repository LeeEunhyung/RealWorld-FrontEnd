import React from 'react'
import styled from 'styled-components'
import { CommentForm } from './CommentForm'
import { CommentsList } from './CommentsList'

const StyledContentContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

export function ContentContainer() {
    return (
        <StyledContentContainer>
            <CommentForm />
            <CommentsList />
        </StyledContentContainer>
    )
}
