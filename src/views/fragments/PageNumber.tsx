import React from 'react'
import styled from 'styled-components'

import NumberButton from '../components/NumberButton'

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

interface IProps {
    contentsCount: number
    pageNumber: number
}

function setPageNumberList(index: number) {
    let i = 0
    let list = []
    console.log(index)
    while (i < index) {
        list[i] = i + 1
        i = i + 1
    }
    return list
}

function PageNumber(props: IProps) {
    const pageNumberList: number[] = setPageNumberList(props.pageNumber)

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
}

export default PageNumber
