import React from 'react';

import Tags from './Tags';

import img from '../pages/img/smiley-cyrus.jpg';

function Contents() {
    return(
            <article>
                <div className = "top">
                    <a href = "./mypage.html"><img src = {img} alt = "smile"></img></a>
                    <div className = "info">
                        <a href = "./mypage.html">LeeEunhyung</a>
                        <time>Wed Mar 04 2020</time>
                    </div>
                    <input type = "button" value = "♥ 0"/>
                </div>
                <div className = "middle">
                    <a href = "./content.html">
                        <h1>TEST</h1>
                        <p>my page</p>
                    </a>
                </div>
                <div className = "bottom">
                    <p><a href = "./content.html">Read more...</a></p>
                    <Tags></Tags>
                </div>
            </article>
    );
}

export default Contents;