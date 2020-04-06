import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { UserContext } from '../../contexts/UserContext'
import { YourFeedsContext } from '../../contexts/YourFeedsContext'

import { Contents } from './Contents'
import { PageNumber } from './PageNumber'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledYourFeed = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
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

export const YourFeed = observer(() => {
    const user = useContext(UserContext)
    const yourFeeds = useContext(YourFeedsContext)
    yourFeeds.resetSelectedPage()

    useEffect(() => {
        user.setYourFeed()
        yourFeeds.getArticles()
    }, [user, yourFeeds])

    return (
        <StyledContainer>
            <StyledYourFeed>
                {yourFeeds.state === 'loading' && (
                    <StyledNotice>Loading...</StyledNotice>
                )}
                {yourFeeds.state === 'none' && (
                    <StyledNotice>It&apos;s empty!</StyledNotice>
                )}
                {yourFeeds.state === 'error' && (
                    <StyledNotice>Error X___X</StyledNotice>
                )}
                {yourFeeds.contents.map(data => {
                    return <Contents key={data.slug} data={data} />
                })}
            </StyledYourFeed>
            {yourFeeds.state === 'done' && <PageNumber />}
        </StyledContainer>
    )
})
