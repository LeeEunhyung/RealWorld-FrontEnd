import React from 'react'
import './css/Header.css'

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
      <h1>
        <a href="#">conduit</a>
      </h1>
      <nav>
        <input type="button" value="Home" onClick={setNavi} />
        <input type="button" value="Sign in" onClick={setNavi} />
        <input type="button" value="Sign up" onClick={setNavi} />
      </nav>
    </header>
  )
}

export default Header
