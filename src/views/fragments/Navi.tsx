import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavi = styled.ul`
    margin-right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
// 스타일 바꾸기, 클릭한 메뉴 선택 유지, My page는 사진으로
const StyledNaviList = styled.li`
    min-height: 25px;
    list-style: none;
    background-color: rgba(0, 0, 0, 0);
    color: rgb(155, 155, 155);
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
        font-size: 1.05rem;
    }
    &.mypage {
        width: 50px;
        height: 50px;
        border-radius: 70px;
        background-image: url(https://cdn.mensagenscomamor.com/content/images/m000498499.jpg?v=1&w=300&h=300);
        background-size: 100%;
        background-position: center center;
        a {
            color: rgba(0, 0, 0, 0);
        }
    }
`

function Navi() {
    return (
        <StyledNavi>
            <StyledNaviList>
                <Link to="/">New story</Link>
            </StyledNaviList>
            <StyledNaviList>
                <Link to="/login">Sign in</Link>
            </StyledNaviList>
            <StyledNaviList>
                <Link to="/register">Sign up</Link>
            </StyledNaviList>
            <StyledNaviList className="mypage">
                <Link to="/mypage">My page</Link>
            </StyledNaviList>
        </StyledNavi>
    )
}

export default Navi
