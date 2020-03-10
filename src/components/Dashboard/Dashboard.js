import React from "react";
import "./Dashboard.css";
import ContractItem from "./ContractItem";

function Dashboard() {
  return (
    <div className="progress">
      <h3>Contracts In Progress</h3>
      <p>M F L</p> <br />
      <ContractItem />
      <ContractItem />
      <ContractItem />
      <ContractItem />
      <ContractItem />
      <ContractItem />
    </div>
  );
}

export default Dashboard;
