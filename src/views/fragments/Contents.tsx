import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ContentImage } from '../components/ContentImage'
import { ContentText } from '../components/ContentText'
import { FavoriteButton } from './FavoriteButton'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'

const StyledContent = styled.article`
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
    data: any
}

export const Contents = observer((props: IProps) => {
    const article = useContext(ArticleContext)

    return (
        <StyledContent>
            <Link
                to={`/article/${props.data.slug}`}
                onClick={() => {
                    article.getClickedArticle(props.data.slug)
                }}
            >
                <ContentImage imgSrc={props.data.author.image} />
                <ContentText title={props.data.title} desc={props.data.desc} />
            </Link>
            <FavoriteButton
                slug={props.data.slug}
                favorited={props.data.favorited}
            />
        </StyledContent>
    )
})
