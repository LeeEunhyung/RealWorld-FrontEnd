import React from 'react'
import styled from 'styled-components'

import { UserInfo } from '../fragments/UserInfo'

const StyledMain = styled.main`
    margin: 20px;
    background-color: #ffffff;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export function MyPage() {
    return (
        <div>
            <StyledMain>
                <UserInfo />
            </StyledMain>
        </div>
    )
}
