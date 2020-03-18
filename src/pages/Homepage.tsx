import React, { useState } from 'react'
import styled from 'styled-components'
import ContentsNavi from '../fragments/ContentsNavi'
import MainContainer from '../fragments/MainContainer'

import data from '../data/data.json'

const StyledHome = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

function Homepage() {
    // eslint-disable-next-line
    const [naviMenu, setNaviMenu] = useState('Feed')

    return (
        <StyledHome>
            <ContentsNavi selectNaviMenu={setNaviMenu} />
            <MainContainer contents={data.articles} />
        </StyledHome>
    )
}

export default Homepage
