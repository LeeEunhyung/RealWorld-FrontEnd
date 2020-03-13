import React from 'react'
import styled from 'styled-components'

import Contents from '../components/Contents'
import PageNumber from '../components/PageNumber'

const StyledSectionContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & section {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`

function SectionContainer() {
  return (
    <StyledSectionContainer>
      <section>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
      </section>
      <PageNumber></PageNumber>
    </StyledSectionContainer>
  )
}

export default SectionContainer
