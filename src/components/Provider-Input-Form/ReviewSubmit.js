import React from "react";

import ProviderSummary from "./ProviderSummary";
import "./form.css";
import Asset4 from "../../SVG/Asset4.svg";

function ReviewSubmit({ providerData, saveData }) {
  return (
    <>
      <div className="form">
        <ProviderSummary state={providerData} saveData={saveData} />
      </div>
      <img src={Asset4} className="progress-bar" alt="progress-bar" />
    </>
  );
}

export default ReviewSubmit;
