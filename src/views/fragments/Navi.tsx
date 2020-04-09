import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { UserContext } from '../../contexts/UserContext'
import { LogoutButton } from './LogoutButton'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledNavi = styled.ul`
    margin-right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledNaviList = styled.li`
    min-height: 25px;
    list-style: none;
    color: #ffffff;
    border: none;
    margin: 0.2rem;
    padding: 0.5rem;
    outline: none;
    background-color: #ff4501;
    border-radius: 29px;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    a {
        display: block;
        color: #ffffff;
        text-decoration: none;
        font-size: 1rem;
    }
    &.mypage {
        padding: 0;
        width: 60px;
        height: 60px;
        border-radius: 70px;
        background-color: rgba(0, 0, 0, 0);
        img {
            width: 60px;
            height: 60px;
            border-radius: 70px;
        }
    }
`

export const Navi = observer(() => {
    const user = useContext(UserContext)
    const articles = useContext(ArticlesContext)

    useEffect(() => {
        if (user.setIsLogin()) user.getUserInfo()
    }, [user])

    return (
        <StyledNavi>
            {user.isLogin && user.state === 'done' && (
                <StyledNaviList className="mypage">
                    <Link to="/profile">
                        <img
                            alt={user.userInfo.username}
                            src={user.userInfo.image}
                        />
                    </Link>
                </StyledNaviList>
            )}
            <StyledNaviList>
                <Link
                    to="/"
                    onClick={() => {
                        articles.setSelectedMenu('Feed')
                    }}
                >
                    New story
                </Link>
            </StyledNaviList>
            {!user.isLogin && (
                <StyledNaviList>
                    <Link to="/login">Sign in</Link>
                </StyledNaviList>
            )}
            {!user.isLogin && (
                <StyledNaviList>
                    <Link to="/register">Sign up</Link>
                </StyledNaviList>
            )}
            {user.isLogin && (
                <StyledNaviList>
                    <LogoutButton />
                </StyledNaviList>
            )}
        </StyledNavi>
    )
})
