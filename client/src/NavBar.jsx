import React from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './Home'

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

  return (
    <>
    <div class="ui secondary menu">
    <a class="item">
      Home
    </a>
    <a onClick={navPiano} class="item">
      Piano
    </a>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i class="search link icon"></i>
        </div>
      </div>
      <a onClick={navLogin} class="item">
        Login
      </a>
      <a onClick={navSignup} class="item">
        Signup
      </a>
    </div>
  </div>
  <Home/>
  </>
  )
}

export default NavBar