import React from 'react'
import styled from 'styled-components'

import { TagFeed } from './TagFeed'
import { AsideContainer } from './AsideContainer'

const StyledTagFeedContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export function TagFeedContainer() {
    return (
        <StyledTagFeedContainer>
            <TagFeed />
            <AsideContainer />
        </StyledTagFeedContainer>
    )
}
