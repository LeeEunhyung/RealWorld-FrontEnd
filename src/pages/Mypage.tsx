import React from 'react'
import './css/Mypage.css'

import SectionContainer from '../fragments/SectionContainer'
import UserInfo from '../components/UserInfo'

function Mypage() {
  return (
    <main>
      <UserInfo></UserInfo>
      <SectionContainer></SectionContainer>
    </main>
  )
}

export default Mypage
