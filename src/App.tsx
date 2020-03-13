import React, { useState } from 'react'
//import './App.css'
import styled from 'styled-components'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Mypage from './pages/Mypage'

function App() {
  const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const [mode, setMode] = useState(<Home></Home>)

  const selectPage = (_mode: string) => {
    let page = <Home></Home>

    if (_mode === 'New story') {
      page = <Home></Home>
    } else if (_mode === 'Sign in') {
      page = <Signin></Signin>
    } else if (_mode === 'Sign up') {
      page = <Signup></Signup>
    } else if (_mode === 'My page') {
      page = <Mypage></Mypage>
    }

    setMode(page)
  }

  return (
    <App>
      <Header setMode={selectPage}></Header>
      {mode}
    </App>
  )
}

export default App
