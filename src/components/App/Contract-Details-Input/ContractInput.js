import React from "react";
import "./contracts.css";

function ContractInput({ takeInContract, contractData, sendContractData }) {
  return (
    <div>
      <h3>Contract Details</h3>
      <form className="form">
        <label for="provider-name">Provider:</label>
        <input
          type="text"
          id="provider-name"
          onChange={takeInContract}
          value={contractData.providerName}
          name="providerName"
        ></input>

        <label for="companyID">Provider ID:</label>
        <input
          type="text"
          id="companyID"
          onChange={takeInContract}
          value={contractData.companyID}
          name="companyID"
        ></input>

        <label for="start-date">Start Date:</label>
        <input
          type="text"
          id="start-date"
          onChange={takeInContract}
          value={contractData.startDate}
          name="startDate"
          placeholder="dd/mm/yyyy"
        ></input>

        <label for="end-date">End Date:</label>
        <input
          type="text"
          id="end-date"
          onChange={takeInContract}
          value={contractData.endDate}
          name="endDate"
          placeholder="dd/mm/yyyy"
        ></input>

        <label for="numberOfLearners">Number of Learners:</label>
        <input
          type="text"
          id="numberOfLearners"
          onChange={takeInContract}
          value={contractData.numberOfLearners}
          name="numberOfLearners"
        ></input>

        <label for="skillLevel">Skill Level:</label>
        <input
          type="text"
          id="skillLevel"
          onChange={takeInContract}
          value={contractData.skillLevel}
          name="skillLevel"
        ></input>
        <label for="budget">Budget:</label>
        <input
          type="text"
          id="budget"
          onChange={takeInContract}
          value={contractData.budget}
          name="budget"
        ></input>

        <label for="complete">Complete:</label>
        <input
          type="text"
          id="complete"
          onChange={takeInContract}
          value={contractData.complete}
          name="complete"
          placeholder="true or false"
        ></input>
      </form>

      <section className="contractbuttons">
        <button
          className="button"
          id="submitcontract"
          onClick={sendContractData}
        >
          Submit
        </button>
      </section>
    </div>
  );
}

export default ContractInput;
