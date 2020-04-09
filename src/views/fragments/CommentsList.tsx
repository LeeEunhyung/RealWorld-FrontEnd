import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { Link } from 'react-router-dom'
import { DeleteButton } from './DeleteButton'

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
    input {
        margin: 4px;
        height: 40px;
        border-radius: 10px;
        outline: none;
    }
`

const StyledDesc = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledBody = styled.div`
    padding-left: 16px;
`

const StyledAuthor = styled.div`
    padding-right: 16px;
    display: flex;
    flex-direction: row;
    border-right: 1px dotted #c8c8c8;
`

export const CommentsList = observer(() => {
    const article = useContext(ArticleContext)

    return (
        <StyledCommentsList>
            {article.commentList.map(data => {
                return (
                    <StyledComment key={data.id}>
                        <StyledDesc>
                            <StyledAuthor>
                                <Link to="/profile">
                                    <img
                                        src={data.author.image}
                                        alt={data.author.username}
                                    />
                                </Link>
                                <div>
                                    <Link to="/profile">
                                        {data.author.username}
                                    </Link>
                                    <span>
                                        {String(data.createdAt).substr(0, 10)}
                                    </span>
                                </div>
                            </StyledAuthor>
                            <StyledBody>{data.body}</StyledBody>
                        </StyledDesc>
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
