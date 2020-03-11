import React from 'react'
import './css/Signin.css'

function Signin() {
  return (
    <div className="Signin">
      <section>
        <p>Sign In</p>
        <a href="./register.html">Need an account?</a>
      </section>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  )
}

export default Signin
