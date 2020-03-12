import React, { useState } from "react";
import "./Dashboard.css";

import { Link } from "react-router-dom";
import ContractItem from "../contractItem/ContractItem";
import Searchbar from "../searchbar/searchbar";
//import DisplayProviders from "../displayProviders/displayProviders";

function Dashboard() {
  const [input, setInput] = useState("");

  function handleSetInput(event) {
    setInput(event.target.value);
    console.log(input);
  }

  return (
    <>
      <Searchbar input={input} handleSetInput={handleSetInput} />
      <div className="progress">
        <h3>Contracts In Progress</h3>
        <p>M F L</p> <br />
        <ContractItem /> <br />
      </div>
      <Link to="/input-contract">
        <button className="contractButton">Add New Contract</button>
      </Link>
      <button className="contractButton">Payment Profile</button>
    </>
  );
}

export default Dashboard;
