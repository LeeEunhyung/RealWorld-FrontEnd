import React from 'react'

import './css/Home.css'
import ContentsNavi from '../components/ContentsNavi'
import MainContainer from '../fragments/MainContainer'

function Home() {
  return (
    <div className="Home">
      <ContentsNavi></ContentsNavi>
      <MainContainer></MainContainer>
    </div>
  )
}

export default Home
