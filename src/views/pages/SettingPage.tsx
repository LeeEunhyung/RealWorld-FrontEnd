import React from 'react'
import styled from 'styled-components'
import { LogoutButton } from '../fragments/LogoutButton'
import { Title } from '../components/Title'

const StyledSettingPage = styled.div`
    min-height: 500px;
    min-width: 400px;
    margin-top: 16px;
    background-color: #ffffff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function SettingPage() {
    return (
        <StyledSettingPage>
            <Title title="Your Settings" />
            <input type="textbox" placeholder="URL of profile picture" />
            <input type="textbox" placeholder="Username" />
            <input type="textarea" placeholder="Short bio about you" />
            <input type="textbox" placeholder="Email" />
            <input type="textbox" placeholder="New Password" />
            <LogoutButton />
        </StyledSettingPage>
    )
}
