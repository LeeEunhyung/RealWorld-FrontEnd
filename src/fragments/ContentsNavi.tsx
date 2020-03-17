import React, { useState } from 'react'
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

interface IProps {
  selectNaviMenu: (_menu: string) => void
}

function ContentsNavi(props: IProps) {
  const StyledList = styled.li`
    list-style: none;
    width: 184px;
    height: 60px;
    border: none;
    background-color: #f6f5f0;
    outline: none;
    text-align: center;
    font-size: 1.2rem;
    a {
      color: #000000;
      text-decoration: none;
    }
    border-bottom: 6px solid #ff4501;
  `

  return (
    <StyledNav>
      <StyledList
        onClick={function() {
          props.selectNaviMenu('Feed')
        }}
      >
        <Link to="/">Feed</Link>
      </StyledList>
      <StyledList
        onClick={function() {
          props.selectNaviMenu('Your Feed')
        }}
      >
        <Link to="/mypage">Your Feed</Link>
      </StyledList>
    </StyledNav>
  )
}

export default ContentsNavi
