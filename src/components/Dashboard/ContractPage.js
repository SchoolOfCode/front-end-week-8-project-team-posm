import React from "react";
import ContractItem from "../contractItem/ContractItem";
import "./ContractPage.css";

function ContractPage() {
  return (
    <wrapper className="contractWrapper">
      <div className="contractSummary" id="left">
        <ContractItem>
          <p> insert info here?</p>
        </ContractItem>
      </div>
      <div className="contractSummary" id="right">
        <p>insert all the data from the summary in here</p>
      </div>
      <div className="contract" id="left">
        <p>insert the populated contract here w a download button</p>
      </div>
    </wrapper>
  );
}

export default ContractPage;
