import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Contents from './Contents'
import PageNumber from './PageNumber'

import ArticleContext from '../../ArticleContext'

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
    const article = useContext(ArticleContext)
    // eslint-disable-next-line
    const [selectedNumber, setSelectedNumber] = useState(1)

    return (
        <StyledSectionContainer>
            <section>
                {article.contents.map((data, i) => {
                    if (
                        i >= (selectedNumber - 1) * 6 &&
                        i < selectedNumber * 6
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
                    }
                    return null
                })}
            </section>
            <PageNumber />
        </StyledSectionContainer>
    )
})

export default SectionContainer
