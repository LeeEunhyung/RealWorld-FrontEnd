import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <PrivateRoute path="/profile" component={MyPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        </StyledApp>
    )
}

export default App
