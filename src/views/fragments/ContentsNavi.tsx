import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { UserContext } from '../../contexts/UserContext'

const StyledNavi = styled.nav`
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
    line-height: 3rem;
    width: 184px;
    height: 60px;
    display: block;
    color: #000000;
    text-decoration: none;
    border-bottom: 6px solid #c8c8c8;
    cursor: pointer;
`

export const ContentsNavi = observer(() => {
    const user = useContext(UserContext)
    return (
        <StyledNavi>
            <StyledList>
                <Link to="/home">Feed</Link>
            </StyledList>
            <StyledList>
                {user.isLogin && <Link to="/home/your-feed">Your Feed</Link>}
            </StyledList>
        </StyledNavi>
    )
})
