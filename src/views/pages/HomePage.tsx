import React from 'react'
import styled from 'styled-components'

import { ContentsNavi } from '../fragments/ContentsNavi'

import { FeedContainer } from '../fragments/FeedContainer'
import { YourFeedContainer } from '../fragments/YourFeedContainer'
import { Switch, Route } from 'react-router-dom'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

export function HomePage() {
    return (
        <StyledHome>
            <ContentsNavi />
            <Switch>
                <Route exact path="/home" component={FeedContainer} />
                <Route
                    exact
                    path="/home/your-feed"
                    component={YourFeedContainer}
                />
            </Switch>
        </StyledHome>
    )
}
