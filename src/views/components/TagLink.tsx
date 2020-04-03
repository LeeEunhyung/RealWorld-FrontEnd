import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { TagFeedsContext } from '../../contexts/TagFeedsContext'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const StyledLink = styled.a`
    flex-wrap: wrap;
    margin: 0.3rem;
    padding: 0.3rem;
    text-decoration: none;
    color: #ffffff;
    background-color: #ff4501;
    box-shadow: 3px 3px 5px 0 #bdb9a6, -3px -3px 5px 0 #fffefa;
    border-radius: 14.9px;
    font-size: 0.7rem;
`

interface IProps {
    value: string
}

export const TagsLink = observer((props: IProps) => {
    const tagFeeds = useContext(TagFeedsContext)
    const user = useContext(UserContext)
    return (
        <StyledLink
            as={Link}
            to={`/home/${props.value}`}
            onClick={function() {
                tagFeeds.setSelectedTag(props.value)
                user.setTagFeed(props.value)
            }}
        >
            {props.value}
        </StyledLink>
    )
})
