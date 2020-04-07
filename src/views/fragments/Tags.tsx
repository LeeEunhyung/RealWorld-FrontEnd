import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { ArticlesContext } from '../../contexts/ArticlesContext'
import { TagsLink } from '../components/TagLink'

const StyledTags = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
`

const StyledNotice = styled.div`
    font-weight: bolder;
    text-align: center;
`

export const Tags = observer(() => {
    const articles = useContext(ArticlesContext)

    useEffect(
        function() {
            articles.getTags()
        },
        [articles],
    )

    return (
        <>
            {articles.state === 'loading' && (
                <StyledNotice>Loading...</StyledNotice>
            )}
            {articles.state === 'done' && (
                <StyledTags>
                    {articles.tagsList.map(data => {
                        return <TagsLink key={data} value={data} />
                    })}
                </StyledTags>
            )}
            {articles.state === 'error' && (
                <StyledNotice>Error X___X</StyledNotice>
            )}
        </>
    )
})
