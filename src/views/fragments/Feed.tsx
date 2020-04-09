import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { ArticlesContext } from '../../contexts/ArticlesContext'

import { Contents } from './Contents'

const StyledFeed = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Feed = observer(() => {
    const articles = useContext(ArticlesContext)

    useEffect(() => {
        articles.setSelectedMenu('Feed')
    }, [articles])

    return (
        <StyledFeed>
            {articles.articlesList.map(data => {
                return <Contents key={data.slug} data={data} />
            })}
        </StyledFeed>
    )
})
