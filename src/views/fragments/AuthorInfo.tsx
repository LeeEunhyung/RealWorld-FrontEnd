import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { Link } from 'react-router-dom'

const StyledAuthorInfo = styled.div`
    margin: 8px;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
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

const StyledFollow = styled.input`
    border: 1px solid #c8c8c8;
    color: #c8c8c8;
    background-color: rgba(0, 0, 0, 0);
    &.true,
    &:hover {
        color: #ffffff;
        background-color: #c8c8c8;
    }
`

const StyledFavorite = styled.input`
    border: 1px solid #ff4501;
    color: #ff4501;
    background-color: rgba(0, 0, 0, 0);
    &.true,
    &:hover {
        color: #ffffff;
        background-color: #ff4501;
    }
`

export const AuthorInfo = observer(() => {
    const article = useContext(ArticleContext)
    return (
        <StyledAuthorInfo>
            <Link to="/">
                <img
                    src={article.articleInfo.author.image}
                    alt={article.articleInfo.author.username}
                />
            </Link>
            <div>
                <Link to="/">{article.articleInfo.author.username}</Link>
                <span>
                    {String(article.articleInfo.createdAt).substr(0, 10)}
                </span>
            </div>
            <div>
                <StyledFollow
                    className={String(article.articleInfo.author.following)}
                    type="button"
                    value={article.followingValue}
                    onClick={() => {
                        if (article.articleInfo.author.following) {
                            article.unFollowAuthor()
                        } else {
                            article.followAuthor()
                        }
                    }}
                />
                <StyledFavorite
                    className={String(article.articleInfo.favorited)}
                    type="button"
                    value={article.favoritedValue}
                    onClick={() => {
                        if (article.articleInfo.favorited) {
                            article.deleteFavoriteArticle()
                        } else {
                            article.postFavoriteArticle()
                        }
                    }}
                />
            </div>
        </StyledAuthorInfo>
    )
})
