import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { ArticlesContext } from '../../contexts/ArticlesContext'

import { PageNumber } from './PageNumber'
import { PrivateRoute } from './PrivateRoute'
import { Route, Switch } from 'react-router-dom'
import { Feed } from './Feed'
import { TagFeed } from './TagFeed'
import { YourFeed } from './YourFeed'

const StyledSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledNotice = styled.div`
    height: 302px;
    font-weight: bolder;
    text-align: center;
    @media (min-width: 900px) {
        width: 900px;
    }
    @media (max-width: 900px) and (min-width: 600px) {
        width: 600px;
    }
    @media (max-width: 600px) {
        width: 300px;
    }
`

export const SectionContainer = observer(() => {
    const articles = useContext(ArticlesContext)

    return (
        <StyledSectionContainer>
            {articles.state === 'loading' && (
                <StyledNotice>Loading...</StyledNotice>
            )}
            {articles.state === 'none' && (
                <StyledNotice>It&apos;s empty!</StyledNotice>
            )}
            {articles.state === 'error' && (
                <StyledNotice>Error X___X</StyledNotice>
            )}
            <Switch>
                <PrivateRoute path="/your-feed" component={YourFeed} />
                <Route
                    path={`/tag/${articles.selectedTag}`}
                    component={TagFeed}
                />
                <Route path="/" component={Feed} />
            </Switch>
            {articles.state === 'done' && <PageNumber />}
        </StyledSectionContainer>
    )
})
