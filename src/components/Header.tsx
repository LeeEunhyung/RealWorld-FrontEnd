import React from 'react'
import './css/Header.css'

// import img from '../pages/img/profile.jpg'

interface IProps {
  setMode: (mode: string) => void
}

function Header(props: IProps) {
  //const setNavi = (e: React.MouseEvent<HTMLInputElement>) => {
  const setNavi = (e: any) => {
    e.preventDefault()

    const mode = e.target.value

    props.setMode(mode)
  }

  return (
    <header>
      <h1>Conduit</h1>
      <nav>
        <input type="button" value="New story" onClick={setNavi} />
        <input type="button" value="Sign in" onClick={setNavi} />
        <input type="button" value="Sign up" onClick={setNavi} />
        {/* <img src={img} onClick={setNavi}></img> */}
      </nav>
    </header>
  )
}

export default Header
