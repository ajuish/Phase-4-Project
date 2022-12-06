import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ user, setUser }) {

  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  // const [confirmPw, setConfirmPw] = useState("")

  console.log(userEmail);
  console.log(userPassword);
  console.log(userName);
  // console.log(confirmPw);

  function signupClick(e) {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: userEmail, password: userPassword, username: userName })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => setUser(data))
                .then(user ? navigate("/piano") : null)
            }
            else {
                console.log("invalid")

            }
        })
    }

  return (
    <>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <label>Add your e-mail address!</label>
            <div class="ui left icon input">
              <i class="envelope icon"></i>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="E-mail address"
              />
            </div>
          </div>
          <div class="field">
            <label>Create your password!</label>
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input
                onChange={(e) => setUserPassword(e.target.value)}
                type="text"
                name="email"
                placeholder="Password"
              />
            </div>
          </div>
          {/* <div class="field">
            <label>Confirm your password!</label>
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input
                onChange={(e) => setConfirmPw(e.target.value)}
                type="text"
                name="email"
                placeholder="Confirm Password"
              />
            </div>
          </div> */}
          <div class="field">
            <label>Create your user name!</label>
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="email"
                placeholder="User Name"
              />
            </div>
          </div>
          <div onClick={signupClick} class="ui fluid large teal submit button">Submit</div>
        </div>
      </form>
    </>
  );
}

export default Signup;
