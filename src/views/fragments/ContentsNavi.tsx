import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledNavi = styled.nav`
    height: 60px;
    max-width: 1200px;
    width: 100%;
    margin: 1rem 0 1rem;
    display: flex;
    flex-direction: row;
`

const StyledList = styled.li`
    list-style: none;
    border: none;
    background-color: #f6f5f0;
    outline: none;
    text-align: center;
    font-size: 1.2rem;
    line-height: 3rem;
    width: 160px;
    height: 60px;
    color: #000000;
    text-decoration: none;
    border-bottom: 6px solid #c8c8c8;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #000000;
    }
    &.true {
        border-bottom: 6px solid #ff4501;
    }
    &.false {
        border-bottom: 6px solid #c8c8c8;
    }
`

export const ContentsNavi = observer(() => {
    const articles = useContext(ArticlesContext)

    return (
        <StyledNavi>
            <StyledList className={String(articles.selectedMenu.feed)}>
                <Link
                    to="/"
                    onClick={() => {
                        articles.setSelectedMenu('Feed')
                    }}
                >
                    Feed
                </Link>
            </StyledList>
            <StyledList className={String(articles.selectedMenu.yourFeed)}>
                <Link
                    to="/your-feed"
                    onClick={() => {
                        articles.setSelectedMenu('Your Feed')
                    }}
                >
                    Your Feed
                </Link>
            </StyledList>
            {articles.selectedTag && (
                <StyledList className={String(articles.selectedMenu.tagFeed)}>
                    <Link to={`/tag/${articles.selectedTag}`}>
                        # {articles.selectedTag}
                    </Link>
                </StyledList>
            )}
        </StyledNavi>
    )
})
