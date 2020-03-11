import React from "react";
import "./Login.css";

function Login({ handleUsername, handlePassword, submitLoginInfo }) {
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
