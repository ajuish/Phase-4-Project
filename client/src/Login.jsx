import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'

function Login({ setUser, user }) {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signup, setSignup] = useState(false)



    function handleSignup() {
      setSignup(!signup)
    }

    function handleLogIn(e) {
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => setUser(data))
                //currently need to click twice in order to set user data and navigate to piano
                .then(user ? navigate("/piano", {state: {user: user}}) : null)
            }
            else {
                console.log("invalid")

            }
        })
    }

  return (
    <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="envelope icon"></i>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div 
        onClick={handleLogIn}
        class="ui fluid large teal submit button">Login</div>
      </div>
      <div class="ui error message"></div>
    </form>
    <div class="ui message">
      New to us? <a onClick={handleSignup} href="#signup">Sign Up</a>
    </div>
    {signup ? <Signup signup={signup} setSignup={setSignup}/> : null}
  </div>
</div>
  )
}

export default Login