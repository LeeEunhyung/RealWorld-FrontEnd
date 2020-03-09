import React from 'react';

function setNavi(this: any, e: any) {
    const mode = e.currentTarget.value;
    alert(mode);
    //this.props.setMode(mode);
}

function Header() {
    return(
        <header>
            <h1><a href = "./index.html">conduit</a></h1>
            <nav>
                <input type = "button" value = "Home" onClick = {setNavi}></input>
                <input type = "button" value = "Sign in" onClick = {setNavi}></input>
                <input type = "button" value = "Sign up" onClick = {setNavi}></input>
            </nav>
        </header>
    );
}

export default Header;