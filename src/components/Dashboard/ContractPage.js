import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./ContractPage.css";
import Checkbox from "../checkbox/checkbox";
import { SERVER_URL } from "../../config";
function ContractPage({ handleCheckboxChange, isChecked }) {
  const [contractData, setContractData] = useState([]);
  const { contract_id } = useParams();
  useEffect(() => {
    async function goToContract() {
      const res = await fetch(`${SERVER_URL}/contracts?id=${contract_id}`);
      const data = await res.json();
      console.log(data);
      setContractData(data);
    }
    goToContract();
  }, [contract_id]);

  return (
    <wrapper className="contractWrapper">
      <div className="contractSummary" id="left">
        <Checkbox
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>
      <div className="contractSummary" id="right">
        <h2 className="summaryTitle">Summary</h2>
        <p>Name: {contractData.provider_name}</p>
        <p>
          From-Til: {contractData.start_date}-{contractData.end_date}
        </p>
        <p>Learners: {contractData.number_of_learners}</p>
        <p>Skill Level: {contractData.skill_level}</p>
        <p>Completed? {contractData.complete}</p>
        <p>Budget: {contractData.budget}</p>
      </div>
      <div className="contract" id="left">
        <p>Contract Document coming soon...</p>
      </div>
      <Link to="/dashboard">
        <button className="button" id="backToDash">
          Back to Dashboard
        </button>
      </Link>
    </wrapper>
  );
}

export default ContractPage;
