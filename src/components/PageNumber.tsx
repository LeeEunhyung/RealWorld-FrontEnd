import React from 'react'
import './css/PageNumber.css'

function PageNumber() {
  return (
    <div className="PageNumber">
      <input className="arrow" type="button" value="<" />
      <input className="number" type="button" value="1" />
      <input className="number" type="button" value="2" />
      <input className="number" type="button" value="3" />
      <input className="arrow" type="button" value=">" />
    </div>
  )
}

export default PageNumber
