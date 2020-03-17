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
  const [naviMenu, setNaviMenu] = useState('Feed')
  const [ID, setID] = useState('jake')

  const _setNaviMenu = (_naviMenu: string) => {
    setNaviMenu(_naviMenu)
  }

  return (
    <StyledHome>
      <ContentsNavi selectNaviMenu={_setNaviMenu}></ContentsNavi>
      <MainContainer contents={data.articles}></MainContainer>
    </StyledHome>
  )
}

export default Homepage
