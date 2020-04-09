import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { Contents } from './Contents'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledYourFeed = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const YourFeed = observer(() => {
    const articles = useContext(ArticlesContext)

    useEffect(() => {
        articles.setSelectedMenu('Your Feed')
    }, [articles])

    return (
        <StyledYourFeed>
            {articles.articlesList.map(data => {
                return <Contents key={data.slug} data={data} />
            })}
        </StyledYourFeed>
    )
})
