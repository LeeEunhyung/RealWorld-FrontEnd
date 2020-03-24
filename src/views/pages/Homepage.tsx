import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import ContentsNavi from '../fragments/ContentsNavi'
import MainContainer from '../fragments/MainContainer'

import ArticleContext from '../../ArticleContext'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

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
            <MainContainer />
        </StyledHome>
    )
})

export default Homepage
