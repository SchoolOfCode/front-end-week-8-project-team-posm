import React from "react";
import { Link } from "react-router-dom";
import css from "./Provider-Input-Form.module.css";

function ProviderDetails({ takeInData, providerData }) {
  return (
    <div>
      <form className={css.inputform}>
        <label for="prov-name">Provider Name:</label>
        <input
          type="text"
          id="prov-name"
          onChange={takeInData}
          value={providerData.provider}
          name="provider"
        ></input>
        <label for="pkurn">PKURN</label>
        <input
          type="text"
          id="pkurn"
          onChange={takeInData}
          value={providerData.pkurn}
          name="pkurn"
        ></input>
      </form>

      <Link to="/register2">
        {" "}
        <button className={css.button}>Next</button>
      </Link>
    </div>
  );
}

export default ProviderDetails;
