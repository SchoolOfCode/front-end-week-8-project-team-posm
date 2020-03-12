import React from "react";

function ContractInput({ takeInContract, contractData, sendContractData }) {
  return (
    <div>
      <form className="form">
        <label for="provider-name">Provider:</label>
        <input
          type="text"
          id="provider-name"
          onChange={takeInContract}
          value={contractData.providerName}
          name="providerName"
        ></input>
        <br />
        <label for="companyID">Provider ID:</label>
        <input
          type="text"
          id="companyID"
          onChange={takeInContract}
          value={contractData.companyID}
          name="companyID"
        ></input>
        <br />
        <label for="start-date">Start Date:</label>
        <input
          type="text"
          id="start-date"
          onChange={takeInContract}
          value={contractData.startDate}
          name="startDate"
        ></input>
        <br />
        <label for="end-date">End Date:</label>
        <input
          type="text"
          id="end-date"
          onChange={takeInContract}
          value={contractData.endDate}
          name="endDate"
        ></input>
        <br />
        <label for="numberOfLearners">Number of Learners:</label>
        <input
          type="text"
          id="numberOfLearners"
          onChange={takeInContract}
          value={contractData.numberOfLearners}
          name="numberOfLearners"
        ></input>
        <br />
        <label for="skillLevel">Skill Level:</label>
        <input
          type="text"
          id="skillLevel"
          onChange={takeInContract}
          value={contractData.skillLevel}
          name="skillLevel"
        ></input>
        <br />
        <label for="complete">Complete:</label>
        <select
          className="option"
          type="text"
          id="complete"
          onChange={takeInContract}
          value={contractData.complete}
          name="complete"
        >
          <option>true</option>
          <option>false</option>
        </select>
        <br />
        <label for="budget">Budget:</label>
        <input
          type="text"
          id="budget"
          onChange={takeInContract}
          value={contractData.budget}
          name="budget"
        ></input>
      </form>
      <div className="buttons">
        <button className="button" onClick={sendContractData}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContractInput;
