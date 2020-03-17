import React from 'react'
import styled from 'styled-components'

const StyledTags = styled.section`
  margin: 1rem;
  input {
    margin: 0.3rem;
    height: 30px;
    background-color: #ff4501;
    color: #ffffff;
    border: none;
    box-shadow: 3px 3px 5px 0 #bdb9a6, -3px -3px 5px 0 #fffefa;
    border-radius: 14.9px;
    outline: none;
    font-size: 0.6rem;
    max-width: 900px;
  }
`

function Tags() {
  return (
    <StyledTags>
      <input type="button" value="react" />
      <input type="button" value="react-router" />
      <input type="button" value="mobx" />
      <input type="button" value="mobx-react" />
      <input type="button" value="create-react-app" />
      <input type="button" value="typescript" />
      <input type="button" value="mobx-react" />
      <input type="button" value="react" />
      <input type="button" value="react-router" />
      <input type="button" value="mobx" />
      <input type="button" value="mobx-react" />
      <input type="button" value="create-react-app" />
      <input type="button" value="typescript" />
      <input type="button" value="mobx-react" />
    </StyledTags>
  )
}

export default Tags
