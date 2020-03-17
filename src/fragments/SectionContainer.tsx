import React, { useEffect } from 'react'
import styled from 'styled-components'

import Contents from './Contents'
import PageNumber from './PageNumber'

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

interface IProps {
  contents: any[]
}

function SectionContainer(props: IProps) {
  const showContents = () => {
    let contentsList = []
    let contents = props.contents
    contentsList.push(
      contents.map((data, i) => {
        return (
          <Contents
            key={i}
            title={data.title}
            desc={data.description}
            imgSrc={data.author.iamge}
          ></Contents>
        )
      }),
    )

    return contentsList
  }

  return (
    <StyledSectionContainer>
      <section>
        {props.contents.map((data, i) => {
          return (
            <Contents
              key={i}
              title={data.title}
              desc={data.description}
              imgSrc={data.author.image}
            ></Contents>
          )
        })}
      </section>
      <PageNumber contentsCount={props.contents.length}></PageNumber>
    </StyledSectionContainer>
  )
}

export default SectionContainer
