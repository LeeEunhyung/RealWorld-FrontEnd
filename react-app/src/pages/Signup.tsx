import React from 'react';

function Signup() {
    return(
        <main>
            <div id = 'signup'>
                <p>Sign Up</p>
                <a href = './login.html'>Have an account?</a>
                <form>
                    <input className = 'text_box' type = 'text' placeholder = 'Username'></input>
                    <input className = 'text_box' type = 'text' placeholder = 'Email'></input>
                    <input className = 'text_box' type = 'password' placeholder = 'Password'></input>
                    <input id = 'b_submit' type = 'submit' value = 'Sign in'></input>
                </form>
            </div>
        </main>
    );
}

export default Signup;