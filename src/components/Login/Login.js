import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../config";
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
    fetch(`${SERVER_URL}/login`, {
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
      <input placeholder="Email" onChange={handleUsername} /> <br />
      <input type="password" placeholder="Password" onChange={handlePassword} />
      <br />
      <Link to="/home">
        <button className="button">Back</button>
      </Link>
      <button onClick={submitLoginInfo} className="loginButton">
        Login
      </button>
    </div>
  );
}

export default Login;
