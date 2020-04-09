import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { useHistory } from 'react-router-dom'

const StyledButton = styled.input`
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
    &.true {
        background-color: #ff4501;
        color: #ffffff;
    }
`

interface IProps {
    slug: string
    favorited: boolean
}

export const FavoriteButton = observer((props: IProps) => {
    const history = useHistory()
    const [isClicked, setIsClicked] = useState(props.favorited)
    const article = useContext(ArticleContext)

    return (
        <StyledButton
            className={String(isClicked)}
            type="button"
            value="♡"
            onClick={() => {
                if (localStorage.getItem('token') === null) {
                    history.push('/login')
                } else {
                    if (isClicked) article.turnOffFavoriteButton(props.slug)
                    else article.turnOnFavoriteButton(props.slug)
                    setIsClicked(!isClicked)
                }
            }}
        />
    )
})
