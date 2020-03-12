import React from 'react'
import './css/SectionContainer.css'

import Contents from '../components/Contents'
import PageNumber from '../components/PageNumber'

function SectionContainer() {
  return (
    <div className="SectionContainer">
      <section>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
        <Contents></Contents>
      </section>
      <PageNumber></PageNumber>
    </div>
  )
}

export default SectionContainer
