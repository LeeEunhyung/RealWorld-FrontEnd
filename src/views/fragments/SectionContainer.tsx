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
import { LoadingSpinner } from './LoadingSpinner'

const StyledSectionContainer = styled.div`
    min-height: 624px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const StyledNotice = styled.div`
    display: flex;
    justify-content: center;
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
            <Switch>
                <PrivateRoute path="/your-feed" component={YourFeed} />
                <Route
                    path={`/tag/${articles.selectedTag}`}
                    component={TagFeed}
                />
                <Route path="/" component={Feed} />
            </Switch>
            {articles.state === 'loading' && (
                <StyledNotice>
                    <LoadingSpinner />
                </StyledNotice>
            )}
            {articles.state === 'none' && (
                <StyledNotice>It&apos;s empty!</StyledNotice>
            )}
            {articles.state === 'error' && (
                <StyledNotice>Error X___X</StyledNotice>
            )}
            <PageNumber />
        </StyledSectionContainer>
    )
})
