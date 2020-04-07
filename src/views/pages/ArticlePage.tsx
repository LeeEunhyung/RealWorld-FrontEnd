import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Banner } from '../fragments/Banner'
import { ContentContainer } from '../fragments/ContentContainer'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'

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
    margin-top: 3rem;
    height: 302px;
    font-weight: bolder;
    text-align: center;
`

export const ArticlePage = observer(() => {
    const article = useContext(ArticleContext)

    useEffect(() => {
        article.getClickedArticle(document.location.href.split('/article/')[1])
    }, [article])

    return (
        <>
            {article.state === 'loading' && (
                <StyledNotice>Loading...</StyledNotice>
            )}
            {article.state === 'done' && (
                <StyledArticle>
                    <Banner />
                    <ContentContainer />
                </StyledArticle>
            )}
            {article.state === 'error' && (
                <StyledNotice>Error X___X</StyledNotice>
            )}
        </>
    )
})
