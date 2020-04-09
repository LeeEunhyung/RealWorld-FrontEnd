import React from 'react'
import styled from 'styled-components'
import { UserInfo } from '../fragments/UserInfo'
import { LogoutButton } from '../fragments/LogoutButton'

const StyledMain = styled.main`
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export function MyPage() {
    return (
        <StyledMain>
            <UserInfo />
            <LogoutButton />
        </StyledMain>
    )
}
