import React from 'react';
import img from '../pages/img/smiley-cyrus.jpg';

function UserInfo() {
    return(
        <div className = "UserInfo">
            <div className = "UserInfoContainer">
                <img src = {img} alt = "smile"></img>
                <h1>LeeEunhyung</h1>
                <p>Hello World!</p>
                <input type="button" value = "+ Follow LeeEunhyung"></input>
            </div>
        </div>
    );
}

export default UserInfo;