import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import logo from "../../components/logo.svg";
import littleLogo from "../Login/WMCA_logo.png";
import "./index.css";
import ProviderDetails from "../Provider-Input-Form/ProviderDetails";
import MainContact from "../Provider-Input-Form/MainContact";
import PaymentProfile from "../Provider-Input-Form/PaymentProfile";
import ReviewSubmit from "../Provider-Input-Form/ReviewSubmit";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [providerData, setProviderData] = useState({
    provider: "",
    pkurn: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    jobTitle: "",
    bankName: "",
    accountNumber: "",
    sortCode1: "",
    sortCode2: "",
    sortCode3: ""
  });

  function takeInData(e) {
    const { value, name } = e.target;
    setProviderData({ ...providerData, [name]: value });
    console.log(providerData);
  }

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
        <img src={logo} alt="WMCA-logo" className="logo" />
        {loggedIn ? (
          <>
            <img src={littleLogo} alt="WMCA-logo" className="userImg" />
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
            <Route path="/register1">
              <ProviderDetails
                takeInData={takeInData}
                providerData={providerData}
              />
            </Route>
            <Route path="/register2">
              <MainContact
                takeInData={takeInData}
                providerData={providerData}
              />
            </Route>
            <Route path="/register3">
              <PaymentProfile
                takeInData={takeInData}
                providerData={providerData}
              />
            </Route>
            <Route path="/register4">
              <ReviewSubmit providerData={providerData} />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
