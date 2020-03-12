import React from "react";
import "./Dashboard.css";
import ContractItem from "./ContractItem";
import searchIcon from "./searchIcon.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <input placeholder="Search" className="searchBar" />
      <img className="searchIcon" src={searchIcon} />
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
