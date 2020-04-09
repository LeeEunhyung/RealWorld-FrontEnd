import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { TagsLink } from '../components/TagLink'
import { observer } from 'mobx-react'
import { TagsContext } from '../../contexts/TagsContext'
import { ArticlesContext } from '../../contexts/ArticlesContext'

const StyledAsideContainer = styled.aside`
    margin: 5px 0 5px 15px;
    flex-grow: 1;
    flex-basis: 1px;
    max-width: 900px;
    min-width: 252px;
    height: fit-content;
`

const StyledTagList = styled.div`
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
`

export const AsideContainer = observer(() => {
    const tags = useContext(TagsContext)
    const articles = useContext(ArticlesContext)

    useEffect(() => {
        tags.getTags()
    }, [tags])

    return (
        <StyledAsideContainer>
            <StyledTagList>
                {tags.tagsList.map(data => {
                    return (
                        <TagsLink
                            key={data}
                            value={data}
                            onClick={() => {
                                articles.setSelectedMenu(data)
                            }}
                        />
                    )
                })}
            </StyledTagList>
        </StyledAsideContainer>
    )
})
