import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './views/fragments/Header'
import { HomePage } from './views/pages/Homepage'
import { LoginPage } from './views/pages/Loginpage'
import { RegisterPage } from './views/pages/Registerpage'
import { MyPage } from './views/pages/Mypage'

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function App() {
    return (
        <StyledApp>
            <Router>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/profile/:username" component={MyPage} />
            </Router>
        </StyledApp>
    )
}

export default App
