import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { Link } from 'react-router-dom'

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
        margin: 0 0 0 8px;
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

const StyledBody = styled.div`
    margin-left: 6px;
`

const StyledAuthor = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

export const CommentsList = observer(() => {
    const article = useContext(ArticleContext)

    return (
        <StyledCommentsList>
            {article.commentList.map(data => {
                return (
                    <StyledComment key={data.id}>
                        <StyledBody>{data.body}</StyledBody>
                        <StyledAuthor>
                            <div>
                                <Link to="/profile">
                                    {data.author.username}
                                </Link>
                                <span>
                                    {String(data.createdAt).substr(0, 10)}
                                </span>
                            </div>
                            <Link to="/profile">
                                <img
                                    src={data.author.image}
                                    alt={data.author.username}
                                />
                            </Link>
                        </StyledAuthor>
                    </StyledComment>
                )
            })}
        </StyledCommentsList>
    )
})
