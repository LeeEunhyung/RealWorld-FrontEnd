import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { TagFeedsContext } from '../../contexts/TagFeedsContext'
import { Contents } from './Contents'
import { observer } from 'mobx-react'
import { PageNumber } from './PageNumber'
import { UserContext } from '../../contexts/UserContext'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledTagFeed = styled.section`
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

export const TagFeed = observer(() => {
    const user = useContext(UserContext)
    const tagFeeds = useContext(TagFeedsContext)
    tagFeeds.resetSelectedPage()

    useEffect(() => {
        user.setTagFeed(tagFeeds.selectedTag)
        tagFeeds.getArticlesByTag()
        // eslint-disable-next-line
    }, [tagFeeds.selectedTag])

    return user.isSelectedTagEmpty() ? null : (
        <StyledContainer>
            <StyledTagFeed>
                {tagFeeds.state === 'loading' && (
                    <StyledNotice>Loading...</StyledNotice>
                )}
                {tagFeeds.state === 'none' && (
                    <StyledNotice>It&apos;s empty!</StyledNotice>
                )}
                {tagFeeds.state === 'error' && (
                    <StyledNotice>Error x_x</StyledNotice>
                )}
                {tagFeeds.contents.map(data => {
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
            </StyledTagFeed>
            {tagFeeds.state === 'done' && <PageNumber />}
        </StyledContainer>
    )
})
