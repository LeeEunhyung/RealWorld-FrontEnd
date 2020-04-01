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
    }, [])

    return (
        <StyledFeed>
            {feeds.dataState === 'loading' && (
                <StyledNotice>Loading...</StyledNotice>
            )}
            {feeds.dataState === 'none' && (
                <StyledNotice>It&apos;s empty!</StyledNotice>
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
            {feeds.dataState === 'done' && <PageNumber />}
        </StyledFeed>
    )
})
