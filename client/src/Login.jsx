import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {

    // const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(email)

    function handleLogIn(e) {
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(user => setUser(user))
                .then(() => console.log("accepted"))
                // .then(navigate("/piano"))
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
            <i class="user icon"></i>
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
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>

  )
}

export default Login