import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Content } from './Content'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledTagFeed = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const TagFeed = observer(() => {
    const articles = useContext(ArticlesContext)
    const history = useHistory()

    useEffect(() => {
        articles.selectedTag === '' ? history.push('/') : articles.getArticles()
    }, [articles, history])

    return (
        <StyledTagFeed>
            {articles.articlesList.map(data => {
                return <Content key={data.slug} data={data} />
            })}
        </StyledTagFeed>
    )
})
