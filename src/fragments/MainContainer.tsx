import React from 'react'
import './css/MainContainer.css'

import SectionContainer from './SectionContainer'
import AsideContainer from './AsideContainer'

function MainContainer() {
  return (
    <div className="MainContainer">
      <SectionContainer></SectionContainer>
      <AsideContainer></AsideContainer>
    </div>
  )
}

export default MainContainer
