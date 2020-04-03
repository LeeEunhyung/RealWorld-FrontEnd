import React from 'react'
import styled from 'styled-components'

import { ContentsNavi } from '../fragments/ContentsNavi'
import { MainContainer } from '../fragments/MainContainer'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

export function HomePage() {
    return (
        <StyledHome>
            <ContentsNavi />
            <MainContainer />
        </StyledHome>
    )
}
