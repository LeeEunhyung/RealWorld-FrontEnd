import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { DeleteButton } from './DeleteButton'
import { CommentText } from '../components/CommentText'

const StyledCommentsList = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

const StyledComment = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c8c8c8;
    a {
        text-decoration: none;
        color: #000000;
        &:hover {
            text-decoration: underline;
        }
    }
`

export const CommentsList = observer(() => {
    const article = useContext(ArticleContext)

    return (
        <StyledCommentsList>
            {article.commentList.map(data => {
                return (
                    <StyledComment key={data.id}>
                        <CommentText data={data} />
                        <DeleteButton
                            author={data.author.username}
                            onClick={() => {
                                article.deleteComment(data.id)
                            }}
                        />
                    </StyledComment>
                )
            })}
        </StyledCommentsList>
    )
})
