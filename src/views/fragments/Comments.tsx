import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'

const StyledComments = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

export const Comments = observer(() => {
    const article = useContext(ArticleContext)

    return (
        <StyledComments>
            <input type="textbox" placeholder="Write a comment..." />
            <input type="button" value="Post Comment" />
        </StyledComments>
    )
})
