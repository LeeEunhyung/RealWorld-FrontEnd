import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { YourFeedsContext } from '../../contexts/YourFeedsContext'
import { Contents } from './Contents'
import { observer } from 'mobx-react'
import { PageNumber } from './PageNumber'
import { UserContext } from '../../contexts/UserContext'

const StyledYourFeed = styled.section`
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

export const YourFeed = observer(() => {
    const user = useContext(UserContext)
    const yourFeeds = useContext(YourFeedsContext)

    useEffect(() => {
        user.setYourFeed()
        yourFeeds.getArticles()
    }, [])

    return (
        <StyledYourFeed>
            {yourFeeds.state === 'loading' && (
                <StyledNotice>Loading...</StyledNotice>
            )}
            {yourFeeds.state === 'none' && (
                <StyledNotice>It&apos;s empty!</StyledNotice>
            )}
            {yourFeeds.state === 'error' && (
                <StyledNotice>Error x_x</StyledNotice>
            )}
            {yourFeeds.contents.map(data => {
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
            {yourFeeds.state === 'done' && <PageNumber />}
        </StyledYourFeed>
    )
})
