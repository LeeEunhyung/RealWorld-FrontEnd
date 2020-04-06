import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { UserContext } from '../../contexts/UserContext'
import { FeedsContext } from '../../contexts/FeedsContext'

import { Contents } from './Contents'
import { PageNumber } from './PageNumber'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledFeed = styled.section`
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

export const Feed = observer(() => {
    const user = useContext(UserContext)
    const feeds = useContext(FeedsContext)

    useEffect(() => {
        user.setFeed()
        feeds.resetSelectedPage()
        feeds.getArticles()
    }, [user, feeds])

    return (
        <StyledContainer>
            <StyledFeed>
                {feeds.state === 'loading' && (
                    <StyledNotice>Loading...</StyledNotice>
                )}
                {feeds.state === 'none' && (
                    <StyledNotice>It&apos;s empty!</StyledNotice>
                )}
                {feeds.state === 'error' && (
                    <StyledNotice>Error X___X</StyledNotice>
                )}
                {feeds.contents.map(data => {
                    return <Contents key={data.slug} data={data} />
                })}
            </StyledFeed>
            {feeds.state === 'done' && <PageNumber />}
        </StyledContainer>
    )
})
