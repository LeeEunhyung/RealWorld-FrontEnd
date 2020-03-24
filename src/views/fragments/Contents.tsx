import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContentArticle from '../components/ContentArticle'
import ContentImage from '../components/ContentImage'
import ContentButton from '../components/ContentButton'

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
    &:hover {
        margin: 3px;
        border: 2px dashed #ff4501;
    }
    a {
        text-decoration: none;
        color: black;
    }
`

interface IProps {
    title: string
    desc: string
    imgSrc: string
    favorited: boolean
}

function Contents(props: IProps) {
    return (
        <StyledArticle>
            <Link to="/contentdetail">
                <ContentImage imgSrc={props.imgSrc} />
                <ContentArticle title={props.title} desc={props.desc} />
            </Link>
            <ContentButton favorited={props.favorited} />
        </StyledArticle>
    )
}

export default Contents
