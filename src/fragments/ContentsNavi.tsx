import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
    height: 60px;
    max-width: 1200px;
    margin: 1rem 0 1rem;
    display: flex;
    flex-direction: row;
    .Selected {
        border-bottom: 6px solid #ff4501;
    }
    .Unselected {
        border-bottom: 6px solid #c8c8c8;
    }
`
const StyledList = styled.li`
    list-style: none;
    border: none;
    background-color: #f6f5f0;
    outline: none;
    text-align: center;
    font-size: 1.2rem;
    a {
        line-height: 3rem;
        width: 184px;
        height: 60px;
        display: block;
        color: #000000;
        text-decoration: none;
        border-bottom: 6px solid #c8c8c8;
    }
`

interface IProps {
    selectNaviMenu: (_menu: string) => void
}

function ContentsNavi(props: IProps) {
    return (
        <StyledNav>
            <StyledList>
                <Link
                    className="Feed"
                    to="/"
                    onClick={function() {
                        props.selectNaviMenu('Feed')
                    }}
                >
                    Feed
                </Link>
            </StyledList>
            <StyledList>
                <Link
                    to="/mypage"
                    onClick={function(e) {
                        props.selectNaviMenu('Your Feed')
                    }}
                >
                    Your Feed
                </Link>
            </StyledList>
        </StyledNav>
    )
}

export default ContentsNavi
