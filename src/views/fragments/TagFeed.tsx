import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { UserContext } from '../../contexts/UserContext'
import { TagFeedsContext } from '../../contexts/TagFeedsContext'

import { Contents } from './Contents'
import { PageNumber } from './PageNumber'

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
    const history = useHistory()
    const user = useContext(UserContext)
    const tagFeeds = useContext(TagFeedsContext)
    tagFeeds.resetSelectedPage()

    useEffect(() => {
        user.setTagFeed(tagFeeds.selectedTag)
        tagFeeds.getArticlesByTag()
    }, [user, tagFeeds])

    return user.isSelectedTagEmpty(() => {
        history.push('/')
    }) ? null : (
        <StyledContainer>
            <StyledTagFeed>
                {tagFeeds.state === 'loading' && (
                    <StyledNotice>Loading...</StyledNotice>
                )}
                {tagFeeds.state === 'none' && (
                    <StyledNotice>It&apos;s empty!</StyledNotice>
                )}
                {tagFeeds.state === 'error' && (
                    <StyledNotice>Error X___X</StyledNotice>
                )}
                {tagFeeds.contents.map(data => {
                    return <Contents key={data.slug} data={data} />
                })}
            </StyledTagFeed>
            {tagFeeds.state === 'done' && <PageNumber />}
        </StyledContainer>
    )
})
