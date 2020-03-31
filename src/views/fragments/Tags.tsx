import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { FeedsContext } from '../../contexts/FeedsContext'

const StyledTags = styled.section`
    margin: 1rem;
    input {
        margin: 0.3rem;
        height: 30px;
        background-color: #ff4501;
        color: #ffffff;
        border: none;
        box-shadow: 3px 3px 5px 0 #bdb9a6, -3px -3px 5px 0 #fffefa;
        border-radius: 14.9px;
        outline: none;
        font-size: 0.6rem;
        max-width: 900px;
    }
`

export const Tags = observer(() => {
    const articles = useContext(FeedsContext)
    return (
        <StyledTags>
            {articles.contents.map((data: any) => {
                return data.tagList.map((data: any) => {
                    return <input key={data} type="button" value={data} />
                })
            })}
        </StyledTags>
    )
})
