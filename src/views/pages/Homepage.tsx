import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import ContentsNavi from '../fragments/ContentsNavi'

import ArticlesContext from '../../contexts/ArticlesContext'
import FeedContainer from '../fragments/FeedContainer'
import YourFeedContainer from '../fragments/YourFeedContainer'
import UserContext from '../../contexts/UserContext'

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

const Homepage = observer(() => {
    const articles = useContext(ArticlesContext)
    const user = useContext(UserContext)
    user.setUserInfo()
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

export default Homepage
