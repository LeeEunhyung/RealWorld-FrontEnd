import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FeedsContext } from '../../contexts/FeedsContext'
import { Contents } from './Contents'
import { observer } from 'mobx-react'
import { PageNumber } from './PageNumber'
import { UserContext } from '../../contexts/UserContext'

const StyledFeed = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const StyledNotice = styled.div`
    width: 300px;
    height: 302px;
    font-weight: bolder;
    text-align: center;
`

export const Feed = observer(() => {
    const user = useContext(UserContext)
    const feeds = useContext(FeedsContext)

    useEffect(() => {
        user.setFeed()
        feeds.getArticles()
        // eslint-disable-next-line
    }, [])

    return (
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
            {feeds.state === 'done' && <PageNumber />}
        </StyledFeed>
    )
})
