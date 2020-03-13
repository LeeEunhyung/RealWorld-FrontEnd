import React from 'react'
import styled from 'styled-components'

import ContentsNavi from '../components/ContentsNavi'
import MainContainer from '../fragments/MainContainer'

const StyledHome = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`

function Home() {
  return (
    <StyledHome>
      <ContentsNavi></ContentsNavi>
      <MainContainer></MainContainer>
    </StyledHome>
  )
}

export default Home
