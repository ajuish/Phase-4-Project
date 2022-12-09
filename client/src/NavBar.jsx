import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {

const navigate = useNavigate()

function navLogin() {
    navigate("/login")
}

function navSignup() {
    navigate("/signup")
}

function navPiano() {
    navigate("/piano")
}

function navHome() {
  navigate("/")
}

function navLogout(){
  sessionStorage.clear()
  navigate("/")
}

function navProfile(){
  navigate('/profile')
}

  return (
    <>
    <div class="ui secondary menu">
      <h1 className='title'>React Piano</h1>
    <div class="right menu">
      <a onClick={navHome} class="item">
        Home
      </a>
      <a onClick={navPiano} class="item">
        Piano
      </a>
      <a onClick={navProfile} class="item">
        Profile
      </a>
      <a onClick={navLogin} class="item">
        Login
      </a>
      <a onClick={navSignup} class="item">
        Signup
      </a>
      <a onClick={navLogout} class="item">
        Logout
      </a>
    </div>
  </div>
  </>
  )
}

export default NavBar