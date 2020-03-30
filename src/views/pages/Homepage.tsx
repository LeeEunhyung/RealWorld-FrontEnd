import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { ContentsNavi } from '../fragments/ContentsNavi'

import { ArticlesContext } from '../../contexts/ArticlesContext'
import { FeedContainer } from '../fragments/FeedContainer'
import { YourFeedContainer } from '../fragments/YourFeedContainer'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

const setMainContainer = (naviMenu: string) => {
    if (naviMenu === 'Feed') {
        return <FeedContainer />
    } else if (naviMenu === 'Your Feed') {
        return <YourFeedContainer />
    }
}

export const Homepage = observer(() => {
    const articles = useContext(ArticlesContext)
    return (
        <StyledHome>
            <ContentsNavi
                selectNaviMenu={function(_menu: string) {
                    articles.naviMenu = _menu
                    articles.getArticles()
                }}
            />
            {setMainContainer(articles.naviMenu)}
        </StyledHome>
    )
})
