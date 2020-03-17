import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from './fragments/Header'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import Registerpage from './pages/Registerpage'
import Mypage from './pages/Mypage'
import ContentDetailPage from './pages/ContentDetailPage'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <StyledApp>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/login" component={Loginpage}></Route>
        <Route path="/register" component={Registerpage}></Route>
        <Route path="/mypage" component={Mypage}></Route>
        <Route path="/contentdetail" component={ContentDetailPage}></Route>
      </Router>
    </StyledApp>
  )
}

export default App
