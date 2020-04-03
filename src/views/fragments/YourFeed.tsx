import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { UserContext } from '../../contexts/UserContext'
import { YourFeedsContext } from '../../contexts/YourFeedsContext'

import { ContentImage } from '../components/ContentImage'
import { ContentText } from '../components/ContentText'
import { ContentButton } from '../components/ContentButton'
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

const StyledContent = styled.article`
    background-color: #ffffff;
    width: 290px;
    height: 302px;
    border-radius: 30px;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    &:hover {
        margin: 3px;
        border: 2px dashed #ff4501;
    }
    a {
        text-decoration: none;
        color: black;
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
                    <StyledNotice>Error x_x</StyledNotice>
                )}
                {yourFeeds.contents.map(data => {
                    return (
                        <StyledContent key={data.slug}>
                            <Link to={`/article/${data.slug}`}>
                                <ContentImage imgSrc={data.author.image} />
                                <ContentText
                                    title={data.title}
                                    desc={data.desc}
                                />
                            </Link>
                            <ContentButton favorited={data.favorited} />
                        </StyledContent>
                    )
                })}
            </StyledYourFeed>
            {yourFeeds.state === 'done' && <PageNumber />}
        </StyledContainer>
    )
})
