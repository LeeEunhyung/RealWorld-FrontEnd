import React, { useContext } from 'react'
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

export const ArticlePage = observer(() => {
    const article = useContext(ArticleContext)

    return article.articleInfo === undefined ? null : (
        <StyledArticle>
            <Banner />
            <ContentContainer />
        </StyledArticle>
    )
})
