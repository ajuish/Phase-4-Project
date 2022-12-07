import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ user, setUser }) {

  const navigate = useNavigate()
  
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  // const [confirmPw, setConfirmPw] = useState("")

  const currentUser = sessionStorage.getItem("user_id")

  useEffect(() => {
    if (currentUser) {
     navigate("/piano")
    } 
  },[])

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
                .then(data => window.sessionStorage.setItem("user_id", data.id))
                .then(() => navigate("/piano"))
            }
            else {
                console.log("invalid")

            }
        })
    }

  return (
    <>
      <form className="ui large form">
        <div className="ui stacked segment">
          <div className="field">
            <label>Add your e-mail address!</label>
            <div className="ui left icon input">
              <i className="envelope icon"></i>
              <input
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="E-mail address"
              />
            </div>
          </div>
          <div className="field">
            <label>Create your password!</label>
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input
                onChange={(e) => setUserPassword(e.target.value)}
                type="text"
                name="email"
                placeholder="Password"
              />
            </div>
          </div>
          {/* <div className="field">
            <label>Confirm your password!</label>
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input
                onChange={(e) => setConfirmPw(e.target.value)}
                type="text"
                name="email"
                placeholder="Confirm Password"
              />
            </div>
          </div> */}
          <div className="field">
            <label>Create your user name!</label>
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="email"
                placeholder="User Name"
              />
            </div>
          </div>
          <div onClick={signupClick} className="ui fluid large teal submit button">Submit</div>
        </div>
      </form>
    </>
  );
}

export default Signup;
