import React from 'react'
import './css/Signup.css'

function Signup() {
  return (
    <div className="Signup">
      <section>
        <h1>Sign Up</h1>
        <a href="./login.html">Have an account?</a>
      </section>
      <form>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  )
}

export default Signup
