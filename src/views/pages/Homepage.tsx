import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import ContentsNavi from '../fragments/ContentsNavi'
import MainContainer from '../fragments/MainContainer'

import ArticlesContext from '../../contexts/ArticlesContext'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

const Homepage = observer(() => {
    const articles = useContext(ArticlesContext)
    return (
        <StyledHome>
            <ContentsNavi
                selectNaviMenu={function(_menu: string) {
                    articles.naviMenu = _menu
                    articles.setContents()
                }}
            />
            <MainContainer />
        </StyledHome>
    )
})

export default Homepage
