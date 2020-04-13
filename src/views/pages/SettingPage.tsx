import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { LogoutButton } from '../fragments/LogoutButton'
import { Title } from '../components/Title'
import { observer } from 'mobx-react'
import { UserContext } from '../../contexts/UserContext'
import { ErrorMessage } from '../fragments/ErrorMessage'
import { useHistory } from 'react-router-dom'

const StyledSettingPage = styled.div`
    min-height: 500px;
    max-width: 900px;
    width: 90%;
    margin-top: 16px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    font-size: 1rem;
`

const StyledTextBox = styled.input`
    height: 30px;
    width: 90%;
    border: 1px solid #c8c8c8;
    text-indent: 1rem;
    color: #000000;
    margin: 8px;
`

const StyledTextArea = styled.input`
    height: 200px;
    width: 90%;
    border: 1px solid #c8c8c8;
    text-indent: 1rem;
    color: #000000;
    margin: 8px;
`

const StyledButton = styled.input`
    width: 90%;
    height: 50px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color: #ff4501;
    font-size: 18px;
    font-family: inherit;
    color: #ffffff;
    font-weight: bolder;
    margin: 8px 8px 16px;
`

export const SettingPage = observer(() => {
    const history = useHistory()
    const user = useContext(UserContext)

    const [image, setImage] = useState(user.userInfo.image)
    const [username, setUsername] = useState(user.userInfo.username)
    const [bio, setBio] = useState(user.userInfo.bio)
    const [email, setEmail] = useState(user.userInfo.email)
    let password = ''

    return (
        <StyledSettingPage>
            <Title title="Your Settings" />
            <ErrorMessage color="gray" />
            <StyledTextBox
                type="textbox"
                placeholder="URL of profile picture"
                value={image}
                onChange={function(e) {
                    setImage(e.target.value)
                }}
            />
            <StyledTextBox
                type="textbox"
                placeholder="Username"
                value={username}
                onChange={function(e) {
                    setUsername(e.target.value)
                }}
            />
            <StyledTextArea
                type="textarea"
                placeholder="Short bio about you"
                value={bio}
                onChange={function(e) {
                    setBio(e.target.value)
                }}
            />
            <StyledTextBox
                type="textbox"
                placeholder="Email"
                value={email}
                onChange={function(e) {
                    setEmail(e.target.value)
                }}
            />
            <StyledTextBox
                type="password"
                placeholder="New Password"
                onChange={function(e) {
                    password = e.target.value
                }}
            />
            <StyledButton
                type="button"
                value="Update Setting"
                onClick={async () => {
                    let userInfo: any = {}
                    userInfo.image = image
                    userInfo.username = username
                    userInfo.bio = bio
                    userInfo.email = email
                    if (password) userInfo.password = password
                    const result = await user.updateUserInfo(userInfo)
                    if (result) history.push('/profile')
                }}
            />
            <LogoutButton />
        </StyledSettingPage>
    )
})
