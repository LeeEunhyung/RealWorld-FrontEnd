import React from 'react'
import styled from 'styled-components'

import SectionContainer from './SectionContainer'
import AsideContainer from './AsideContainer'

const StyledMainContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

function MainContainer() {
    return (
        <StyledMainContainer>
            <SectionContainer />
            <AsideContainer />
        </StyledMainContainer>
    )
}

export default MainContainer
