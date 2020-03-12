import React from 'react'
import './css/Contents.css'

import img from '../pages/img/whale.jpg'

function Contents() {
  return (
    <article>
      <a href="./content.html">
        <div className="top">
          <img src={img} alt="whale"></img>
        </div>
        <div className="bottom">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <input type="button" value="♡" />
        </div>
      </a>
    </article>
  )
}

export default Contents
