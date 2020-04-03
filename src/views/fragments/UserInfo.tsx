import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { UserContext } from '../../contexts/UserContext'

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

export const UserInfo = observer(() => {
    const user = useContext(UserContext)

    return (
        <StyledUserInfo>
            <img src={user.userInfo.image} alt={user.userInfo.image} />
            <h1>{user.userInfo.username}</h1>
            <p>{user.userInfo.bio}</p>
            <input type="button" value={`+ Follow ${user.userInfo.username}`} />
        </StyledUserInfo>
    )
})
