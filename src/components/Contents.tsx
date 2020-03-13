import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
  background-color: #ffffff;
  width: 290px;
  height: 302px;
  border-radius: 30px;
  box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: pointer;
  &:hover {
    margin: 3px;
    border: 2px dashed #ff4501;
  }
  a {
    text-decoration: none;
    color: black;
  }
`
const StyledImage = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 30px 0 0 / 30px 30px 0 0;
  img {
    width: 100%;
  }
`
const StyledDesc = styled.div`
  width: 290px;
  height: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    display: block;
    font-size: 1.5rem;
    text-align: left;
    margin: 0 0.5rem 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    text-align: left;
    margin: 0.5rem 0.5rem 0;
    font-size: 0.83rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 4.8rem;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  input {
    align-self: flex-end;
    margin: 0.5rem;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 24px;
    box-shadow: inset 1px 1px 1px 0 rgba(108, 108, 108, 0.4),
      inset -1px -1px 1px 0 rgba(184, 184, 184, 0.1);
    outline: none;
    background-color: #ffffff;
    color: #ff4501;
    text-align: center;
    :hover {
      background-color: #ff4501;
      color: #ffffff;
    }
  }
`

function Contents() {
  return (
    <StyledArticle>
      <a href="#">
        <StyledImage>
          <img
            src="https://live.staticflickr.com/7340/12389517865_a835a9cc5e_b.jpg"
            alt="whale"
          ></img>
        </StyledImage>
        <StyledDesc>
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
        </StyledDesc>
      </a>
    </StyledArticle>
  )
}

export default Contents
