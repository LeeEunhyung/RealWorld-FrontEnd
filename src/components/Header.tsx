import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 50px 0 50px 50px / 50px 0 50px 50px;
  box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
  & h1 {
    margin-left: 1.5rem;
    font-family: cooper-black-std, serif;
    font-size: 36px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  & nav {
    margin-right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & input {
    cursor: pointer;
    height: 50px;
    background-color: rgba(0, 0, 0, 0);
    color: rgb(155, 155, 155);
    border: none;
    margin: 0.2rem;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    background-color: #ff4501;
    color: white;
    border-radius: 29px;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
  }
  & input[name='My page'] {
    width: 60px;
    height: 60px;
    background-image: url(https://cdn.mensagenscomamor.com/content/images/m000498499.jpg?v=1&w=300&h=300);
    background-size: 60px 60px;
  }
`

interface IProps {
  setMode: (mode: string) => void
}

function Header(props: IProps) {
  const setNavi = (e: React.MouseEvent<HTMLInputElement>) => {
    //const setNavi = (e: any) => {
    e.preventDefault()

    const mode = (e.target as HTMLButtonElement).name

    props.setMode(mode)
  }

  return (
    <StyledHeader>
      <h1>Conduit</h1>
      <nav>
        <input
          type="button"
          name="New story"
          value="New story"
          onClick={setNavi}
        />
        <input type="button" name="Sign in" value="Sign in" onClick={setNavi} />
        <input type="button" name="Sign up" value="Sign up" onClick={setNavi} />
        <input type="button" name="My page" onClick={setNavi} />
      </nav>
    </StyledHeader>
  )
}

export default Header
