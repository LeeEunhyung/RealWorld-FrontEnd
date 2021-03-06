import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { NumberButton } from '../components/NumberButton'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledPageNumber = styled.div`
    background-color: #ffffff;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    border-radius: 24.9px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    flex-wrap: wrap;
`

export const PageNumber = observer(() => {
    const articles = useContext(ArticlesContext)

    return (
        <StyledPageNumber>
            <NumberButton
                selected={articles.selectedPage}
                key="<"
                className="arrow"
                value="<"
                onClick={function(e) {
                    articles.setSelectedPage(e.target.value)
                }}
            />
            {articles.pageNumberList.map(data => {
                return (
                    <NumberButton
                        selected={articles.selectedPage}
                        key={data}
                        className="number"
                        value={data}
                        onClick={function(e) {
                            articles.setSelectedPage(e.target.value)
                        }}
                    />
                )
            })}
            <NumberButton
                selected={articles.selectedPage}
                key=">"
                className="arrow"
                value=">"
                onClick={function(e) {
                    articles.setSelectedPage(e.target.value)
                }}
            />
        </StyledPageNumber>
    )
})
