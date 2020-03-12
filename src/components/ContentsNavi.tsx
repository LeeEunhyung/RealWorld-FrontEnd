import React from 'react'
import './css/ContentsNavi.css'

function ContentsNavi() {
  return (
    <nav>
      <ul>
        <li className="Selected">
          <a href="./index2.html">Feed</a>
        </li>
        <li className="Unselected">
          <a href="./index2.html">Your Feed</a>
        </li>
      </ul>
    </nav>
  )
}

export default ContentsNavi
