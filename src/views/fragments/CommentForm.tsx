import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'

const StyledCommnetForm = styled.div`
    min-height: 100px;
    display: flex;
    flex-direction: row;
`

const StyledText = styled.textarea`
    width: 100%;
    border: 1px solid #c8c8c8;
    border-radius: 15px 0 0 15px / 15px 0 0 15px;
    padding: 1rem;
    resize: none;
`

const StyledButton = styled.input`
    width: 200px;
    border-radius: 0 15px 15px 0 / 0 15px 15px 0;
    border: none;
    background-color: #c8c8c8;
    color: #ffffff;
`

export const CommentForm = observer(() => {
    const article = useContext(ArticleContext)
    let comment: string = ''

    return (
        <StyledCommnetForm>
            <StyledText
                placeholder="Write a comment..."
                onChange={e => {
                    comment = e.target.value
                }}
            />
            <StyledButton
                type="button"
                value="Post Comment"
                onClick={() => {
                    article.addComment(comment)
                }}
            />
        </StyledCommnetForm>
    )
})
