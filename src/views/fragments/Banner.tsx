import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticleContext } from '../../contexts/ArticleContext'
import { AuthorInfo } from './AuthorInfo'

const StyledArticle = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`

const StyledTitle = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #c8c8c8;
`

const StyledDesc = styled.div`
    margin: 4px;
    display: flex;
    flex-direction: column;
`

const StyledTagList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const StyledTag = styled.p`
    margin: 4px 4px 4px 0;
    padding: 2px;
    border: 1px solid #c8c8c8;
    color: #c8c8c8;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 25px;
`

export const Banner = observer(() => {
    const article = useContext(ArticleContext)
    return (
        <StyledArticle>
            <StyledTitle>
                <h1>{article.articleInfo.title}</h1>
                <AuthorInfo />
            </StyledTitle>
            <StyledDesc>
                <p>{article.articleInfo.body}</p>
                <StyledTagList>
                    {article.articleInfo.tagList
                        ? article.articleInfo.tagList.map((data: any) => {
                              return <StyledTag key={data}>{data}</StyledTag>
                          })
                        : null}
                </StyledTagList>
            </StyledDesc>
        </StyledArticle>
    )
})
