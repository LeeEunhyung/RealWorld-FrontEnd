import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FeedsContext } from '../../contexts/FeedsContext'
import { Contents } from './Contents'
import { observer } from 'mobx-react'
import { PageNumber } from './PageNumber'
import { UserContext } from '../../contexts/UserContext'

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
    feeds.resetSelectedPage()

    useEffect(() => {
        user.setFeed()
        feeds.getArticles()
        // eslint-disable-next-line
    }, [])

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
                    return (
                        <Contents
                            key={data.slug}
                            title={data.title}
                            desc={data.description}
                            imgSrc={data.author.image}
                            favorited={data.favorited}
                        />
                    )
                })}
            </StyledFeed>
            {feeds.state === 'done' && <PageNumber />}
        </StyledContainer>
    )
})
