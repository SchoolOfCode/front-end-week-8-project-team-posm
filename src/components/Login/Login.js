import React from "react";
import "./Login.css";

function Login({ handleUsername, handlePassword, submitLoginInfo, Link }) {
  return (
    <div className="login">
      <h2>Employee Login</h2>
      <input placeholder="Username" onChange={handleUsername} /> <br />
      <input type="password" placeholder="Password" onChange={handlePassword} />
      <br />
      <Link to="/dashboard">
        <button onClick={submitLoginInfo}>Login</button>
      </Link>
    </div>
  );
}

export default Login;
