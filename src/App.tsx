import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { configure } from 'mobx'

import { Header } from './views/fragments/Header'
import { HomePage } from './views/pages/HomePage'
import { LoginPage } from './views/pages/LoginPage'
import { RegisterPage } from './views/pages/RegisterPage'
import { ArticlePage } from './views/pages/ArticlePage'
import { MyPage } from './views/pages/MyPage'

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
                    <Route path="/article" component={ArticlePage} />
                    <PrivateRoute path="/profile" component={MyPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        </StyledApp>
    )
}

export default App
