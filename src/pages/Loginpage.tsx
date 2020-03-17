import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const StyledSignin = styled.div`
  margin: 20px;
  background-color: #ffffff;
  width: 90%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
  font-family: 'Source Sans Pro', sans-serif;
  background-image: url(https://live.staticflickr.com/7340/12389517865_a835a9cc5e_b.jpg);
  background-size: 900px;
  background-position: center center;
  & section {
    display: flex;
    flex-direction: column;
    border-radius: 30px 30px 0 0 / 30px 30px 0 0;
    width: 100%;
  }
  & h1 {
    text-align: center;
    color: #ffffff;
    font-size: 3rem;
    margin: 10px 0 0;
  }
  & form {
    width: 90%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  & input[type='text'],
  & input[type='password'] {
    outline: none;
    height: 50px;
    width: 100%;
    border: 1px solid #ffffff;
    border-radius: 24px;
    font-size: 1.2rem;
    text-indent: 1rem;
    background-color: rgba(0, 0, 0, 0);
    color: #ffffff;
    margin: 8px;
  }
  & input[type='submit'] {
    width: 100%;
    height: 50px;
    outline: none;
    border-radius: 25px;
    border: 1px solid #ff4501;
    font-size: 18px;
    font-family: inherit;
    background-color: white;
    color: #ff4501;
    font-weight: bolder;
    background-color: rgba(0, 0, 0, 0);
    margin: 8px 8px 16px;
  }
  & input[type='submit']:hover {
    background-color: #ff4501;
    color: white;
  }
  & input::placeholder {
    color: rgb(209, 209, 209);
    text-indent: 1rem;
  }
`

const StyledLink = styled.li`
  list-style: none;
  & a {
    color: #ff4501;
    text-decoration: none;
    font-size: 1rem;
    margin: 5px 0 20px;
    display: block;
    text-align: center;
    font-weight: bolder;
  }
  & a:hover {
    text-decoration: underline;
  }
`

function Loginpage() {
  return (
    <StyledSignin>
      <Title title="Sign In"></Title>
      <StyledLink>
        <Link to="/register">Need an account?</Link>
      </StyledLink>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Sign in" />
      </form>
    </StyledSignin>
  )
}

export default Loginpage
