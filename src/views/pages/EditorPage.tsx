import React, { useContext } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { ArticlesContext } from '../../contexts/ArticlesContext'
import { useHistory } from 'react-router-dom'

const StyledEditorPage = styled.div`
    min-height: 500px;
    max-width: 900px;
    width: 90%;
    margin-top: 16px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    font-size: 1rem;
    & input[type='button'] {
        width: 90%;
        height: 50px;
        outline: none;
        border-radius: 5px;
        border: none;
        background-color: #ff4501;
        font-size: 18px;
        font-family: inherit;
        color: #ffffff;
        font-weight: bolder;
        margin: 8px 8px 16px;
    }
`

const StyledTitle = styled.input`
    height: 50px;
    width: 90%;
    border: 1px solid #c8c8c8;
    font-size: 1.2rem;
    text-indent: 1rem;
    color: #000000;
    margin: 8px;
`

const StyledDesc = styled.input`
    height: 30px;
    width: 90%;
    border: 1px solid #c8c8c8;
    text-indent: 1rem;
    color: #000000;
    margin: 8px;
`

const StyledBody = styled.input`
    height: 200px;
    width: 90%;
    border: 1px solid #c8c8c8;
    text-indent: 1rem;
    color: #000000;
    margin: 8px;
`

const StyledTags = styled.input`
    height: 30px;
    width: 90%;
    border: 1px solid #c8c8c8;
    text-indent: 1rem;
    color: #000000;
    margin: 8px;
`

export const EditorPage = observer(() => {
    const history = useHistory()
    const articles = useContext(ArticlesContext)
    let config: any = {}
    return (
        <StyledEditorPage>
            <StyledTitle
                type="textbox"
                placeholder="Article Title"
                onChange={e => {
                    config.title = e.target.value
                }}
            />
            <StyledDesc
                type="textbox"
                placeholder="What's this article about"
                onChange={e => {
                    config.description = e.target.value
                }}
            />
            <StyledBody
                type="textarea"
                placeholder="Write your article"
                onChange={e => {
                    config.body = e.target.value
                }}
            />
            <StyledTags
                type="textbox"
                placeholder="Enter tags"
                onChange={e => {
                    config.tagList = e.target.value
                }}
            />
            <input
                type="button"
                value="Publish Article"
                onClick={async () => {
                    await articles.addArticle(config)
                    history.push('/')
                }}
            />
        </StyledEditorPage>
    )
})
