import React, { useContext } from 'react'
import styled from 'styled-components'

import { ContentsNavi } from '../fragments/ContentsNavi'

import { FeedContainer } from '../fragments/FeedContainer'
import { YourFeedContainer } from '../fragments/YourFeedContainer'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoute'
import { TagFeedContainer } from '../fragments/TagFeedContainer'
import { observer } from 'mobx-react'
import { UserContext } from '../../contexts/UserContext'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

export const HomePage = observer(() => {
    const user = useContext(UserContext)
    return (
        <StyledHome>
            <ContentsNavi />
            <Switch>
                <Route exact path="/home" component={FeedContainer} />
                <PrivateRoute
                    exact
                    path="/home/your-feed"
                    component={YourFeedContainer}
                />
                <Route
                    path={`/home/${user.selectedTag}`}
                    component={TagFeedContainer}
                />
            </Switch>
        </StyledHome>
    )
})
