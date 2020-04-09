import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { NumberButton } from '../components/NumberButton'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledPageNumber = styled.div`
    max-width: 560px;
    background-color: #ffffff;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    border-radius: 24.9px;
    display: flex;
    align-items: center;
    margin: 10px;
    flex-wrap: wrap;
`

export const PageNumber = observer(() => {
    const articles = useContext(ArticlesContext)

    useEffect(() => {
        articles.setPageNumberList()
    }, [articles])

    return (
        <StyledPageNumber>
            {articles.pageNumberList.map(data => {
                return (
                    <NumberButton
                        key={data}
                        value={data}
                        onClick={function(e: any) {
                            articles.setSelectedPage(e.target.value)
                        }}
                    />
                )
            })}
        </StyledPageNumber>
    )
})
