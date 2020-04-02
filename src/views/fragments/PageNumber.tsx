import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { NumberButton } from '../components/NumberButton'
import { FeedsContext } from '../../contexts/FeedsContext'
import { YourFeedsContext } from '../../contexts/YourFeedsContext'
import { UserContext } from '../../contexts/UserContext'

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

function setPageNumberList(pageNumber: number) {
    let i = 0
    let list = []
    while (i < pageNumber) {
        list[i] = i + 1
        i = i + 1
    }
    return list
}

export const PageNumber = observer(() => {
    const user = useContext(UserContext)
    const feeds = useContext(FeedsContext)
    const yourFeeds = useContext(YourFeedsContext)
    const _pageCount =
        user.selectedNaviMenu === 'Feed' ? feeds.pageCount : yourFeeds.pageCount
    const pageNumberList: number[] = setPageNumberList(_pageCount)

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
