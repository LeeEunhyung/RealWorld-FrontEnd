import React from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import Navi from './Navi'

const StyledHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 50px 0 50px 50px / 50px 0 50px 50px;
  box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
`

function Header() {
  return (
    <StyledHeader>
      <Title title="Conduit"></Title>
      <Navi></Navi>
    </StyledHeader>
  )
}

export default Header
