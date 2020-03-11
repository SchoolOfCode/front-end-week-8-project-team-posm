import React from "react";
import { Link } from "react-router-dom";
import ProviderSummary from "./ProviderSummary";
import css from "./Provider-Input-Form.module.css";

function ReviewSubmit({ providerData, saveData }) {
  return (
    <div>
      <ProviderSummary state={providerData} />
      <Link to="/register3">
        {" "}
        <button className={css.button}>Back</button>
      </Link>

      <button type="submit" className={css.button} onClick={saveData}>
        Submit
      </button>
    </div>
  );
}

export default ReviewSubmit;
