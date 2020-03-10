import React from "react";
import "./Login.css";

function Login({ handleUsername, handlePassword, submitLoginInfo, Link }) {
  return (
    <div className="login">
      <input placeholder="username" onChange={handleUsername} /> <br />
      <input type="password" placeholder="password" onChange={handlePassword} />
      <br />
      <button onClick={submitLoginInfo}>Login</button>
    </div>
  );
}

export default Login;
