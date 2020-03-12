import React from "react";

import "./ContractPage.css";
import Checkbox from "../checkbox/checkbox";

function ContractPage({ handleCheckboxChange, isChecked }) {
  return (
    <wrapper className="contractWrapper">
      <div className="contractSummary" id="left">
        <Checkbox
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
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
