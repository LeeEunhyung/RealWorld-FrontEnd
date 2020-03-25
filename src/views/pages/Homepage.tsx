import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import ContentsNavi from '../fragments/ContentsNavi'

import ArticlesContext from '../../contexts/ArticlesContext'
import FeedContainer from '../fragments/FeedContainer'
import YourFeedContainer from '../fragments/YourFeedContainer'

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
            {/*FeedContainer와 YourFeedContainer*/}
            <FeedContainer />
            <YourFeedContainer />
        </StyledHome>
    )
})

export default Homepage
