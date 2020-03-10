import React from 'react';
import './css/Header.css';

function Header(props: any) {
    const setNavi = (e: any) => {
        e.preventDefault();
        const mode = e.currentTarget.value;
        //alert(mode);
        props.setMode(mode);
    }

    return(
        <header>
            <h1><a href = "#" onClick = {setNavi}>conduit</a></h1>
            <nav>
                <input type = "button" value = "Home" onClick = {setNavi}></input>
                <input type = "button" value = "Sign in" onClick = {setNavi}></input>
                <input type = "button" value = "Sign up" onClick = {setNavi}></input>
            </nav>
        </header>
    );
}

export default Header;