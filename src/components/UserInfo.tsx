import React from 'react'
import './css/UserInfo.css'
import img from '../pages/img/profile.jpg'

function UserInfo() {
  return (
    <div className="UserInfo">
      <img src={img} alt="smile"></img>
      <h1>LeeEunhyung</h1>
      <p>Hello World!</p>
      <input type="button" value="+ Follow LeeEunhyung" />
    </div>
  )
}

export default UserInfo
