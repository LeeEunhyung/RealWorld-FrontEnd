import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledPageNumber = styled.div`
  max-width: 560px;
  height: 48px;
  background-color: #ffffff;
  box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
  border-radius: 24.9px;
  display: flex;
  align-items: center;
  margin: 10px;
  & input {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 25.9px;
    box-shadow: inset 1px 1px 1px 0 rgba(108, 108, 108, 0.4),
      inset -1px -1px 1px 0 rgba(184, 184, 184, 0.1);
    outline: none;
    margin: 4px;
    cursor: pointer;
  }
  & input.arrow {
    background-color: #000000;
    color: #ffffff;
  }
  & input.number {
    background-color: #ffffff;
    color: #000000;
  }
  & input:hover {
    background-color: #ff4501;
    color: #ffffff;
  }
`

interface IProps {
  contentsCount: number
}

function PageNumber(props: IProps) {
  const ButtonsNum = props.contentsCount / 6

  return (
    <StyledPageNumber>
      <input className="arrow" type="button" value="<" />
      <input className="arrow" type="button" value=">" />
    </StyledPageNumber>
  )
}

export default PageNumber
