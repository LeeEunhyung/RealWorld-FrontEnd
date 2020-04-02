import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './views/fragments/Header'
import { HomePage } from './views/pages/HomePage'
import { LoginPage } from './views/pages/LoginPage'
import { RegisterPage } from './views/pages/RegisterPage'
import { MyPage } from './views/pages/MyPage'
import { configure } from 'mobx'
import { PrivateRoute } from './views/components/PrivateRoute'

configure({ enforceActions: 'observed' })

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
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <PrivateRoute
                        path="/profile/:username"
                        component={MyPage}
                    />
                </Switch>
            </Router>
        </StyledApp>
    )
}

export default App
