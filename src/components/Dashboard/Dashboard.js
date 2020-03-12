import React, { useState } from "react";
import "./Dashboard.css";
import ContractItem from "../contractItem/ContractItem";
import Searchbar from "../searchbar/searchbar";

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
    </>
  );
}

export default Dashboard;
