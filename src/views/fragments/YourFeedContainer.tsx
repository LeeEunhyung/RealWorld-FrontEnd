import React from 'react'
import styled from 'styled-components'

import YourFeed from './YourFeed'
import AsideContainer from './AsideContainer'

const StyledYourFeedContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

function YourFeedContainer() {
    return (
        <StyledYourFeedContainer>
            <YourFeed />
            <AsideContainer />
        </StyledYourFeedContainer>
    )
}

export default YourFeedContainer
