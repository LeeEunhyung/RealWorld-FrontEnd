import React, { useContext } from 'react'
import styled from 'styled-components'
import ArticlesContext from '../../contexts/ArticlesContext'
import Contents from './Contents'
import { observer } from 'mobx-react'
import PageNumber from './PageNumber'

const StyledYourFeed = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const YourFeed = observer(() => {
    const articles = useContext(ArticlesContext)
    return (
        <StyledYourFeed>
            {articles.contents.map((data, i) => {
                if (
                    i >= (articles.selectedPage - 1) * 6 &&
                    i < articles.selectedPage * 6
                ) {
                    return (
                        <Contents
                            key={data.slug}
                            title={data.title}
                            desc={data.description}
                            imgSrc={data.author.image}
                            favorited={data.favorited}
                        />
                    )
                } else {
                    return null
                }
            })}
            <PageNumber />
        </StyledYourFeed>
    )
})

export default YourFeed
