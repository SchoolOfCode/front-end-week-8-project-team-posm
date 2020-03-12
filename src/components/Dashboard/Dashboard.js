import React, { useState } from "react";
import "./Dashboard.css";
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
        <p>M F L</p> <br />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
        <ContractItem />
      </div>
      <Checkbox
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
    </>
  );
}

export default Dashboard;
