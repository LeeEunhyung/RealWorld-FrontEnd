import React, { useState } from 'react'
import styled from 'styled-components'

import Contents from './Contents'
import PageNumber from './PageNumber'

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

interface IProps {
    contents: any[]
}

function SectionContainer(props: IProps) {
    // eslint-disable-next-line
    const [selectedNumber, setSelectedNumber] = useState(1)
    const pageNumber =
        props.contents.length % 6 === 0
            ? props.contents.length / 6
            : Math.floor(props.contents.length / 6) + 1

    return (
        <StyledSectionContainer>
            <section>
                {props.contents.map((data, i) => {
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
                    return 0
                })}
            </section>
            <PageNumber
                contentsCount={props.contents.length}
                pageNumber={pageNumber}
            />
        </StyledSectionContainer>
    )
}

export default SectionContainer
