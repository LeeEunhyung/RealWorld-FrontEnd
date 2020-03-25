import React from 'react'
import styled from 'styled-components'

import Feed from './Feed'
import AsideContainer from './AsideContainer'

const StyledFeedContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

function FeedContainer() {
    return (
        <StyledFeedContainer>
            <Feed />
            <AsideContainer />
        </StyledFeedContainer>
    )
}

export default FeedContainer
