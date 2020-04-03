import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { FeedsContext } from '../../contexts/FeedsContext'
import { UserContext } from '../../contexts/UserContext'
import { YourFeedsContext } from '../../contexts/YourFeedsContext'
import { TagFeedsContext } from '../../contexts/TagFeedsContext'

const StyledButton = styled.input`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 25.9px;
    box-shadow: inset 1px 1px 1px 0 rgba(108, 108, 108, 0.4),
        inset -1px -1px 1px 0 rgba(184, 184, 184, 0.1);
    outline: none;
    margin: 4px;
    cursor: pointer;
    &.arrow {
        background-color: #000000;
        color: #ffffff;
    }
    &.number {
        background-color: #ffffff;
        color: #000000;
    }
    :hover {
        background-color: #ff4501;
        color: #ffffff;
    }
`

interface IProps {
    value: string | number
    className: string
}

export const NumberButton = observer((props: IProps) => {
    const user = useContext(UserContext)
    const feeds = useContext(FeedsContext)
    const yourFeeds = useContext(YourFeedsContext)
    const tagFeeds = useContext(TagFeedsContext)

    return (
        <StyledButton
            className={props.className}
            type="button"
            value={props.value}
            onClick={function(e: any) {
                if (user.selectedNaviMenu === 'Feed') {
                    feeds.setSelectedPage(e.target.value)
                } else if (user.selectedNaviMenu === 'Your Feed') {
                    yourFeeds.setSelectedPage(e.target.value)
                } else {
                    tagFeeds.setSelectedPage(e.target.value)
                }
            }}
        />
    )
})
