import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin-left: 1.5rem;
  font-family: cooper-black-std, serif;
  font-size: 36px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
`

interface IProps {
  title: string
}

function Title(props: IProps) {
  return <StyledTitle>{props.title}</StyledTitle>
}

export default Title
