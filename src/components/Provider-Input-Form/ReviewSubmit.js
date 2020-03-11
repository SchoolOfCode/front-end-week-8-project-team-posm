import React from "react";
import { Link } from "react-router-dom";
import ProviderSummary from "./ProviderSummary";
import "./form.css";

function ReviewSubmit({ providerData, saveData }) {
  return (
    <div className="form">
      <ProviderSummary state={providerData} />

      <section className="buttons">
        <Link to="/register3">
          <button className="button">Back</button>
        </Link>
        <button type="submit" className="button" onClick={saveData}>
          Submit
        </button>
      </section>

    </div>
  );
}

export default ReviewSubmit;
