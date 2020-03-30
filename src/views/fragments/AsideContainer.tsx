import React from 'react'
import styled from 'styled-components'

import { Tags } from './Tags'

const StyledAsideContainer = styled.aside`
    margin: 5px 15px 5px;
    flex-grow: 1;
    flex-basis: 1px;
    width: 280px;
    max-width: 900px;
    height: fit-content;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
`

export function AsideContainer() {
    return (
        <StyledAsideContainer>
            <Tags />
        </StyledAsideContainer>
    )
}
