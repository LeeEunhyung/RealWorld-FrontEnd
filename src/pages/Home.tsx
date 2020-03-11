import React from 'react'

import './css/Home.css'
import MainContainer from '../fragments/MainContainer'

function Home() {
  return (
    <main>
      <div className="main-title">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
      <MainContainer></MainContainer>
    </main>
  )
}

export default Home
