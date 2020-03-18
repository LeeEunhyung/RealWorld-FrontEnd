import React, { useState } from 'react'
import styled from 'styled-components'

//import SectionContainer from '../fragments/SectionContainer'
import UserInfo from '../fragments/UserInfo'
import ContentsNavi from '../fragments/ContentsNavi'

const StyledMain = styled.main`
    margin: 20px;
    background-color: #ffffff;
    box-shadow: 3px 3px 6px 0 #bdb9a6, -3px -3px 6px 0 #fffefa;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

function Mypage() {
    // eslint-disable-next-line
    const [contents, setContents] = useState('Feed')

    return (
        <div>
            <ContentsNavi selectNaviMenu={setContents} />
            <StyledMain>
                <UserInfo />
            </StyledMain>
        </div>
    )
}

export default Mypage
