import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { NumberButton } from '../components/NumberButton'
import { FeedsContext } from '../../contexts/FeedsContext'
import { YourFeedsContext } from '../../contexts/YourFeedsContext'
import { UserContext } from '../../contexts/UserContext'
import { TagFeedsContext } from '../../contexts/TagFeedsContext'

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

function setPageNumberList(
    selectedNaviMenu: string,
    feedPageCount: number,
    yourFeedPageCount: number,
    tagFeedPageCount: number,
) {
    let pageCount: number = 0
    if (selectedNaviMenu === 'Feed') pageCount = feedPageCount
    else if (selectedNaviMenu === 'Your Feed') pageCount = yourFeedPageCount
    else if (selectedNaviMenu === 'Tag Feed') pageCount = tagFeedPageCount

    let i = 0
    let list = []
    while (i < pageCount) {
        list[i] = i + 1
        i = i + 1
    }
    return list
}

export const PageNumber = observer(() => {
    const user = useContext(UserContext)
    const feeds = useContext(FeedsContext)
    const yourFeeds = useContext(YourFeedsContext)
    const tagFeeds = useContext(TagFeedsContext)
    const pageNumberList: number[] = setPageNumberList(
        user.selectedNaviMenu,
        feeds.pageCount,
        yourFeeds.pageCount,
        tagFeeds.pageCount,
    )

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
