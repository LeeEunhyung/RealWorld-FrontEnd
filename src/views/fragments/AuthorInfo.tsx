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
`

const StyledFollow = styled.input`
    margin: 4px;
    height: 40px;
    border: 1px solid #c8c8c8;
    color: #c8c8c8;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
`
const StyledFavorite = styled.input`
    margin: 4px;
    height: 40px;
    border: 1px solid #ff4501;
    color: #ff4501;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
`

export const AuthorInfo = observer(() => {
    const article = useContext(ArticleContext)

    console.log(article.articleInfo.author.following)

    console.log(article.articleInfo.favorited)

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
            <StyledFollow
                type="button"
                value={
                    article.articleInfo.author.following
                        ? `+ Unfollow ${article.articleInfo.author.username}`
                        : `+ Follow ${article.articleInfo.author.username}`
                }
            />
            <StyledFavorite
                type="button"
                value={
                    article.articleInfo.favorited
                        ? `♥ Unfavorite Article (${article.articleInfo.favoritesCount})`
                        : `♥ Favorite Article (${article.articleInfo.favoritesCount})`
                }
            />
        </StyledAuthorInfo>
    )
})
