import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { Comments } from './Comments'

const StyledContentContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

export const ContentContainer = observer(() => {
    const article = useContext(ArticleContext)

    return (
        <StyledContentContainer>
            <div className="contentContainer">
                <Comments />
            </div>
        </StyledContentContainer>
    )
})
