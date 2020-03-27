import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from './views/fragments/Header'
import Homepage from './views/pages/Homepage'
import Loginpage from './views/pages/Loginpage'
import Registerpage from './views/pages/Registerpage'
import Mypage from './views/pages/Mypage'

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
                <Route exact path="/" component={Homepage} />
                <Route path="/login" component={Loginpage} />
                <Route path="/register" component={Registerpage} />
                <Route path="/profile/:username" component={Mypage} />
            </Router>
        </StyledApp>
    )
}

export default App
