import React, { useContext } from 'react'
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

export const Feed = observer(() => {
    const user = useContext(UserContext)
    user.selectedNaviMenu = 'Feed'
    const feeds = useContext(FeedsContext)
    return (
        <StyledFeed>
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
            <PageNumber />
        </StyledFeed>
    )
})
