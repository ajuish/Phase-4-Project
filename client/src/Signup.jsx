import React, { useState } from 'react'

function Signup() {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userName, setUsername] = useState("")

    console.log(userEmail)
    console.log(userPassword)
    console.log(userName)


  return (
    <>
    <form class="ui form">
    <div class="field">
        <label>Add your e-mail address!</label>
        <div class="ui left icon input">
        <i class="envelope icon"></i>
        <input onChange={(e) => setUserEmail(e.target.value)} type="text" name="email" placeholder="E-mail address"/>
        </div>
    </div>
    <div class="field">
        <label>Create your password!</label>
        <div class="ui left icon input">
        <i class="lock icon"></i>
        <input onChange={(e) => setUserPassword(e.target.value)} type="text" name="email" placeholder="Password"/>
        </div>
    </div>
    <div class="field">
        <label>Create your user name!</label>
        <div class="ui left icon input">
        <i class="user icon"></i>
        <input onChange={(e) => setUserEmail(e.target.value)} type="text" name="email" placeholder="User Name"/>
        </div>
    </div>

  <div class="ui fluid large teal submit button">Submit</div>
  </form>
    </>
  )
}

export default Signup