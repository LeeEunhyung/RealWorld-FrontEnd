import React from 'react';

import Contents from '../components/Contents';
import ContentsNavi from '../components/ContentsNavi';
import PageNumber from '../components/PageNumber';

function SectionContainer() {
    return(
        <div className = "SectionContainer">
            <ContentsNavi></ContentsNavi>
            <Contents></Contents>
            <PageNumber></PageNumber>
        </div>
    );
}

export default SectionContainer;