import React, { useState } from "react";
import "./Dashboard.css";

import { Link } from "react-router-dom";

import Searchbar from "../searchbar/searchbar";
//import DisplayProviders from "../displayProviders/displayProviders";

import Autocomplete from "../autoComplete/autocomplete";

function Dashboard() {
  const [input, setInput] = useState("");

  function handleSetInput(event) {
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <>
      <h1>Contracts In Progress</h1>
      <Searchbar input={input} handleSetInput={handleSetInput} />
      <div className="progress">
        <Autocomplete input={input} setInput={setInput} />
      </div>

      <div id="dashButtons">
        <Link to="/input-contract">
          <button className="contractButton">Add New Contract</button>
        </Link>
        <br />
        <button className="contractButton">Payment Profile</button>
      </div>
    </>
  );
}

export default Dashboard;
