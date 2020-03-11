import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login/Login";
import logo from "../../components/logo.svg";
import littleLogo from "../Login/WMCA_logo.png";
import "./index.css";

import MainContact from "../Provider-Input-Form/MainContact";
import PaymentProfile from "../Provider-Input-Form/PaymentProfile";
import ProviderDetails from "../Provider-Input-Form/ProviderDetails";

import ReviewSubmit from "../Provider-Input-Form/ReviewSubmit";
import Thanks from "../Provider-Input-Form/Thanks";
import Dashboard from "../Dashboard/Dashboard";
import ContractInput from "./Contract-Details-Input/ContractInput";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [providerData, setProviderData] = useState({
    providerName: "",
    UKPRN: "",
    firstName: "",
    lastName: "",
    phoneNumber: null,
    email: "",
    jobTitle: "",
    bankName: "",
    accountNumber: null,
    sortCode1: "",
    sortCode2: "",
    sortCode3: ""
  });
  const [success, setSuccess] = useState(false);
  const [contractData, setContractData] = useState({
    providerName: "",
    companyID: null,
    startDate: null,
    endDate: "",
    numberOfLearners: null,
    skillLevel: "",
    summary: "",
    complete: null,
    budget: null
  });

  function takeInContract(e) {
    const { value, name } = e.target;
    const newData = { ...contractData, [name]: value };
    setContractData(newData);
    console.log(newData);
  }

  function takeInData(e) {
    const { value, name } = e.target;
    const newData = { ...providerData, [name]: value };
    setProviderData(newData);
    console.log(newData);
  }

  function sendContractData() {
    fetch(`http://localhost:5000/contracts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contractData)
    })
      .then(response => response.json())
      .then(data => console.log(data.success))
      .catch(err => console.log(err));
  }

  function saveData() {
    const {
      providerName,
      UKPRN,
      firstName,
      lastName,
      accountNumber,
      sortCode1,
      sortCode2,
      sortCode3,
      phoneNumber,
      email,
      jobTitle
    } = providerData;
    const sortCode = `${sortCode1}-${sortCode2}-${sortCode3}`;
    const mainContact = `${firstName} ${lastName}`;
    fetch(`http://localhost:5000/providers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        providerName,
        UKPRN,
        sortCode,
        accountNumber,
        mainContact
      })
    })
      .then(response => response.json())
      .then(data => console.log(data.success))
      .catch(err => console.log(err));

    fetch(`http://localhost:5000/persons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        jobTitle
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSuccess(data.success);
      })
      .catch(err => console.log(err));
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
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                username={username}
                password={password}
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

            {success ? (
              <Route path="/register4">
                <Thanks providerName={providerData.providerName} />
              </Route>
            ) : (
              <Route path="/register4">
                <ReviewSubmit providerData={providerData} saveData={saveData} />
              </Route>
            )}


            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/input-contract">
              <ContractInput
                takeInContract={takeInContract}
                contractData={contractData}
                sendContractData={sendContractData}
              />
            </Route>

          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
