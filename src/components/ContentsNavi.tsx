import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  height: 60px;
  max-width: 1200px;
  margin: 1rem 0 1rem;
  display: flex;
  flex-direction: row;
  input {
    width: 184px;
    height: 60px;
    border: none;
    background-color: #f6f5f0;
    outline: none;
    text-align: center;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .Selected {
    border-bottom: 6px solid #ff4501;
  }
  .Unselected {
    border-bottom: 6px solid #c8c8c8;
  }
`

function ContentsNavi() {
  return (
    <StyledNav>
      <input type="button" value="Feed" className="Selected" />
      <input type="button" value="Your Feed" className="Unselected" />
    </StyledNav>
  )
}

export default ContentsNavi
