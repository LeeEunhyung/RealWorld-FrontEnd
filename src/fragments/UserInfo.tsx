import React from 'react'
import styled from 'styled-components'

const StyledUserInfo = styled.div`
    margin: 20px;
    max-width: 890px;
    flex-grow: 1;
    flex-basis: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & img {
        width: 100px;
        border-radius: 49px;
    }
    & h1 {
        margin-bottom: 0;
        font-size: 1.3rem;
    }
    & p {
        font-size: 0.8rem;
    }
    & input {
        padding: 0.5rem;
        background-color: #ffffff;
        border-radius: 24px;
        box-shadow: 2px 2px 2px 0 rgba(108, 108, 108, 0.4),
            -2px -2px 2px 0 rgba(184, 184, 184, 0.1);
        outline: none;
        border: none;
        color: #ff4501;
    }
    & input:hover {
        box-shadow: inset 2px 2px 2px 0 rgba(108, 108, 108, 0.4),
            inset -2px -2px 2px 0 rgba(184, 184, 184, 0.1);
        background-color: #ff4501;
        color: #ffffff;
    }
`

function UserInfo() {
    return (
        <StyledUserInfo>
            <img
                src="https://cdn.mensagenscomamor.com/content/images/m000498499.jpg?v=1&w=300&h=300"
                alt="profile"
            />
            <h1>LeeEunhyung</h1>
            <p>Hello World!</p>
            <input type="button" value="+ Follow LeeEunhyung" />
        </StyledUserInfo>
    )
}

export default UserInfo
