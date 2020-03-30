import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.div`
    width: 100%;
    height: 130px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px 30px 0 0 / 30px 30px 0 0;
    img {
        width: 100%;
    }
`

interface IProps {
    imgSrc: string
}

export function ContentImage(props: IProps) {
    return (
        <StyledImage>
            <img src={props.imgSrc} alt={props.imgSrc} />
        </StyledImage>
    )
}
