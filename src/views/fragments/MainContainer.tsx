import React from 'react'
import styled from 'styled-components'

import { AsideContainer } from './AsideContainer'
import { SectionContainer } from './SectionContainer'

const StyledMainContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export function MainContainer() {
    return (
        <StyledMainContainer>
            <SectionContainer />
            <AsideContainer />
        </StyledMainContainer>
    )
}
