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
    pageNumber: (_contentsNum: number) => void
}

function PageNumber(props: IProps) {
    const countNumberButton = () => {}

    return (
        <StyledPageNumber>
            <NumberButton className="arrow" value="<" />
            {countNumberButton}
            <NumberButton className="arrow" value=">" />
        </StyledPageNumber>
    )
}

export default PageNumber
