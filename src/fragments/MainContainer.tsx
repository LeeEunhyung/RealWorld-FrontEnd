import React from 'react'
import styled from 'styled-components'

import SectionContainer from './SectionContainer'
import AsideContainer from './AsideContainer'

const StyledMainContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

interface IProps {
  contents: any
}

function MainContainer(props: IProps) {
  return (
    <StyledMainContainer>
      <SectionContainer contents={props.contents}></SectionContainer>
      <AsideContainer></AsideContainer>
    </StyledMainContainer>
  )
}

export default MainContainer
