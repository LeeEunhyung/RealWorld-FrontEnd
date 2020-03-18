import React from 'react'
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
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
`

interface IProps {
    contents: any[]
}

function SectionContainer(props: IProps) {
    const _setContentsByPage = (_contentsNum: number) => {}

    return (
        <StyledSectionContainer>
            <section>
                {props.contents.map((data, i) => {
                    return (
                        <Contents
                            key={i}
                            title={data.title}
                            desc={data.description}
                            imgSrc={data.author.image}
                        />
                    )
                })}
            </section>
            <PageNumber
                contentsCount={props.contents.length}
                pageNumber={_setContentsByPage}
            />
        </StyledSectionContainer>
    )
}

export default SectionContainer
