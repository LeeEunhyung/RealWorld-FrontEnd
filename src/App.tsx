import React, { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Mypage from './pages/Mypage'

function App() {
  const [mode, setMode] = useState(<Mypage></Mypage>)

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
    <div className="App">
      <Header setMode={selectPage}></Header>
      {mode}
    </div>
  )
}

export default App
