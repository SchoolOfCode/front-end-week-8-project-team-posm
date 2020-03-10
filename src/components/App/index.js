import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import logo from "../../components/logo.svg";
import littleLogo from "../Login/WMCA_logo.png";
import "./index.css";
import Dashboard from "../Dashboard/Dashboard";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function createUser() {
    const userData = { username: username, password: password };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => setLoggedIn(data.success))
      .catch(err => console.log(err));
  }
  function submitLoginInfo() {
    const userData = { username: username, password: password };
    fetch(`http://localhost:5000/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => setLoggedIn(data.success), console.log(userData))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <header>
        <img src={logo} className="logo" alt="WMCA logo" />
        {loggedIn ? (
          <>
            <img src={littleLogo} className="userImg" alt="user profile" />
            <p className="logoutButton">Logout</p>
          </>
        ) : (
          ""
        )}
      </header>
      <hr />

      <Router>
        <Switch>
          <div>
            <Route path="/login">
              <Login
                handleUsername={handleUsername}
                handlePassword={handlePassword}
                submitLoginInfo={submitLoginInfo}
                createUser={createUser}
                Link={Link}
              />
            </Route>
            <Route path="/register">
              <p>Hello World</p>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
