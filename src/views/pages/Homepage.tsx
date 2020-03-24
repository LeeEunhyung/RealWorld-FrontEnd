import React, { createContext, useContext } from 'react'
import styled from 'styled-components'

import { observer } from 'mobx-react'

import ContentsNavi from '../fragments/ContentsNavi'
import MainContainer from '../fragments/MainContainer'

import ArticleClass from '../../ArticleClass'

import data from '../../data/data.json'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

const ArticleContext = createContext(new ArticleClass(data, 'cat'))

const Homepage = observer(() => {
    const article = useContext(ArticleContext)
    return (
        <StyledHome>
            <ContentsNavi
                selectNaviMenu={function(_menu: string) {
                    article.naviMenu = _menu
                    article.setContents()
                }}
            />
            <MainContainer contents={article.contents} />
        </StyledHome>
    )
})

export default Homepage
