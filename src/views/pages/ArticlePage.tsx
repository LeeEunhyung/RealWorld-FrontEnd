import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Banner } from '../fragments/Banner'
import { CommentsContainer } from '../fragments/CommentsContainer'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { LoadingSpinner } from '../fragments/LoadingSpinner'

const StyledArticle = styled.div`
    margin-top: 16px;
    padding: 16px;
    width: 90%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    border-radius: 25px;
    flex-wrap: wrap;
`

const StyledNotice = styled.div`
    align-self: center;
    margin-top: 3rem;
    height: 302px;
    font-weight: bolder;
    text-align: center;
`

export const ArticlePage = observer(() => {
    const article = useContext(ArticleContext)
    const slug = document.location.href.split('/article/')[1]

    useEffect(() => {
        article.getClickedArticle(slug)
        article.getComments(slug)
    }, [article, slug])

    return (
        <StyledArticle>
            {article.state === 'loading' && (
                <StyledNotice>
                    <LoadingSpinner />
                </StyledNotice>
            )}
            {article.state === 'done' && (
                <>
                    <Banner />
                    <CommentsContainer />
                </>
            )}
            {article.state === 'error' && (
                <StyledNotice>Error X___X</StyledNotice>
            )}
        </StyledArticle>
    )
})
