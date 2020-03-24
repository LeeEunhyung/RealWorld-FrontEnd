import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import NumberButton from '../components/NumberButton'
import ArticleContext from '../../ArticleContext'

const StyledPageNumber = styled.div`
    max-width: 560px;
    height: 48px;
    background-color: #ffffff;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    border-radius: 24.9px;
    display: flex;
    align-items: center;
    margin: 10px;
`

function setPageNumberList(length: number) {
    let pageNumber = length % 6 === 0 ? length / 6 : Math.floor(length / 6) + 1
    let i = 0
    let list = []
    while (i < pageNumber) {
        list[i] = i + 1
        i = i + 1
    }
    return list
}

const PageNumber = observer(() => {
    const article = useContext(ArticleContext)
    const pageNumberList: number[] = setPageNumberList(article.contents.length)

    return (
        <StyledPageNumber>
            <NumberButton className="arrow" value="<" />
            {pageNumberList.map(data => {
                return (
                    <NumberButton key={data} className="number" value={data} />
                )
            })}
            <NumberButton className="arrow" value=">" />
        </StyledPageNumber>
    )
})

export default PageNumber
