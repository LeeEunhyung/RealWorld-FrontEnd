import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import NumberButton from '../components/NumberButton'
import ArticlesContext from '../../contexts/ArticlesContext'

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

function setPageNumberList(pageNumber: number) {
    let i = 0
    let list = []
    while (i < pageNumber) {
        list[i] = i + 1
        i = i + 1
    }
    return list
}

const PageNumber = observer(() => {
    const articles = useContext(ArticlesContext)
    const pageNumberList: number[] = setPageNumberList(articles.pageCount)

    const setClickedNumber = (clickedNumber: string | number) => {
        if (clickedNumber === '<') {
            articles.selectedPage = 1
        } else if (clickedNumber === '>') {
            articles.selectedPage = articles.pageCount
        } else {
            articles.selectedPage = Number(clickedNumber)
        }
    }

    return (
        <StyledPageNumber>
            <NumberButton
                setClickedNumber={setClickedNumber}
                className="arrow"
                value="<"
            />
            {pageNumberList.map(data => {
                return (
                    <NumberButton
                        setClickedNumber={setClickedNumber}
                        key={data}
                        className="number"
                        value={data}
                    />
                )
            })}
            <NumberButton
                setClickedNumber={setClickedNumber}
                className="arrow"
                value=">"
            />
        </StyledPageNumber>
    )
})

export default PageNumber
