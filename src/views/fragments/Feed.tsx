import React, { useContext } from 'react'
import styled from 'styled-components'
import { ArticlesContext } from '../../contexts/ArticlesContext'
import { Contents } from './Contents'
import { observer } from 'mobx-react'
import { PageNumber } from './PageNumber'

const StyledFeed = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const Feed = observer(() => {
    const articles = useContext(ArticlesContext)
    return (
        <StyledFeed>
            {articles.contents.map(data => {
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
