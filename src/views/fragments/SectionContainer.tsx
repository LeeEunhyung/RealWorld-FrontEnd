import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Contents from './Contents'
import PageNumber from './PageNumber'

import ArticlesContext from '../../contexts/ArticlesContext'

const StyledSectionContainer = styled.div`
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const SectionContainer = observer(() => {
    const articles = useContext(ArticlesContext)

    return (
        <StyledSectionContainer>
            <section>
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
            </section>
            <PageNumber />
        </StyledSectionContainer>
    )
})

export default SectionContainer
