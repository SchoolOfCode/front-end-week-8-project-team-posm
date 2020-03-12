import React, { useState } from "react";
import "./Dashboard.css";

import { Link } from "react-router-dom";
import ContractItem from "../contractItem/ContractItem";
import Searchbar from "../searchbar/searchbar";
//import DisplayProviders from "../displayProviders/displayProviders";
import Checkbox from "../checkbox/checkbox";

function Dashboard() {
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleSetInput(event) {
    setInput(event.target.value);
    console.log(input);
  }

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    console.log(isChecked);
  }

  return (
    <>
      <Searchbar input={input} handleSetInput={handleSetInput} />
      <div className="progress">
        <h3>Contracts In Progress</h3>
        <br />
        <p>M</p>
        <p>F</p>
        <p>L</p>
        <br />

        <ContractItem />
      </div>
      <Checkbox
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      <div id="dashButtons">
        <Link to="/input-contract">
          <button className="contractButton">Add New Contract</button>
        </Link>
        <button className="contractButton">Payment Profile</button>
      </div>
    </>
  );
}

export default Dashboard;
