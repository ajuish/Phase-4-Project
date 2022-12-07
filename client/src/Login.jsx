import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const currentUser = sessionStorage.getItem("user_id")

    useEffect(() => {
      if (currentUser) {
       navigate("/piano")
      } 
    },[])

    function handleSignup() {
      navigate("/signup")
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
                .then(data => window.sessionStorage.setItem("user_id", data.id))
                .then(() => navigate("/piano"))
            }
            else {
                console.log("invalid")
            }
        })
    }

  return (
    <div className ="ui middle aligned center aligned grid">
  <div className ="column">
    <h2 className ="ui teal image header">
      <div className ="content">
        Log-in to your account
      </div>
    </h2>
    <form className ="ui large form">
      <div className ="ui stacked segment">
        <div className ="field">
          <div className ="ui left icon input">
            <i className ="envelope icon"></i>
            <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div className ="field">
          <div className ="ui left icon input">
            <i className ="lock icon"></i>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div 
        onClick={handleLogIn}
        className ="ui fluid large teal submit button">Login</div>
      </div>
      <div className ="ui error message"></div>
    </form>
    <div className ="ui message">
      New to us? <span onClick={handleSignup}>Sign Up</span>
    </div>
  </div>
</div>
  )
}

export default Login