import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { UserContext } from '../../contexts/UserContext'

const StyledNavi = styled.nav`
    height: 60px;
    max-width: 1200px;
    width: 100%;
    margin: 1rem 0 1rem;
    display: flex;
    flex-direction: row;
    .yes {
        border-bottom: 6px solid #ff4501;
    }
    .no {
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
    color: #000000;
    text-decoration: none;
    border-bottom: 6px solid #c8c8c8;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #000000;
    }
`

export const ContentsNavi = observer(() => {
    const user = useContext(UserContext)

    return (
        <StyledNavi>
            <StyledList className={user.isFeedSelected}>
                <Link to="/home">Feed</Link>
            </StyledList>
            <StyledList className={user.isYourFeedSelected}>
                <Link to="/home/your-feed">Your Feed</Link>
            </StyledList>
            {user.selectedNaviMenu === 'Tag Feed' && user.selectedTag && (
                <StyledList className={user.isTagFeedSelected}>
                    <Link to={`/home/${user.selectedTag}`}>
                        # {user.selectedTag}
                    </Link>
                </StyledList>
            )}
        </StyledNavi>
    )
})
