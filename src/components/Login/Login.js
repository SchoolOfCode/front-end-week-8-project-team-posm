import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login({
  handleUsername,
  handlePassword,
  username,
  password,
  loggedIn,
  setLoggedIn
}) {
  const history = useHistory();
  function submitLoginInfo() {
    const userData = { email: username, password: password };
    fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        setLoggedIn(data.success);
        console.log(userData, data.success, loggedIn);
        history.push("/dashboard");
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="login">
      <h2>Employee Login</h2>
      <input placeholder="Username" onChange={handleUsername} /> <br />
      <input type="password" placeholder="Password" onChange={handlePassword} />
      <br />
      <button onClick={submitLoginInfo}>Login</button>
    </div>
  );
}

export default Login;
