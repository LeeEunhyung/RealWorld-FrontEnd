import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { ArticlesContext } from '../../contexts/ArticlesContext'
import { TagsLink } from '../components/TagLink'
import { TagsContext } from '../../contexts/TagsContext'

const StyledTags = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
`

export const Tags = observer(() => {
    const tags = useContext(TagsContext)
    const articles = useContext(ArticlesContext)

    useEffect(() => {
        tags.getTags()
    }, [tags])

    return (
        <StyledTags>
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
        </StyledTags>
    )
})
