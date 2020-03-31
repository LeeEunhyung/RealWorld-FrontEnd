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

export const YourFeed = observer(() => {
    const user = useContext(UserContext)
    const yourFeeds = useContext(YourFeedsContext)

    useEffect(() => {
        user.setYourFeed()
        yourFeeds.getArticles()
    }, [])

    return (
        <StyledYourFeed>
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
            <PageNumber />
        </StyledYourFeed>
    )
})
