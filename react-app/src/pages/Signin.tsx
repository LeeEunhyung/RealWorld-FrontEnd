import React from 'react';

function Signin() {
    return(
        <main>
            <div id = "signin">
            <p id = 'sub_title'>Sign In</p>
            <a id = 'b_register' href = './register.html'>Need an account?</a>
                <form>
                <input className = 'text_box' type = 'text' placeholder = 'Email'></input>
                <input className = 'text_box' type = 'password' placeholder = 'Password'></input>
                <input id = 'b_submit' type = 'submit' value = 'Sign in'></input>
                </form>
            </div>
        </main>
    );
}

export default Signin;