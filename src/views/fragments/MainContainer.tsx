import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Feed } from './Feed'
import { YourFeed } from './YourFeed'
import { TagFeed } from './TagFeed'
import { AsideContainer } from './AsideContainer'
import { PrivateRoute } from '../components/PrivateRoute'

import { UserContext } from '../../contexts/UserContext'

const StyledMainContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const MainContainer = observer(() => {
    const user = useContext(UserContext)
    return (
        <StyledMainContainer>
            <Switch>
                <Route exact path="/home" component={Feed} />
                <PrivateRoute
                    exact
                    path="/home/your-feed"
                    component={YourFeed}
                />
                <Route path={`/home/${user.selectedTag}`} component={TagFeed} />
            </Switch>
            <AsideContainer />
        </StyledMainContainer>
    )
})
