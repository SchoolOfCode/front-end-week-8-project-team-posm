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
          value={providerData.providerName}
          name="providerName"
          required
        ></input>
        <br />
        <label for="ukprn">UKPRN:</label>
        <input
          type="text"
          id="ukprn"
          onChange={takeInData}
          value={providerData.UKPRN}
          name="UKPRN"
        ></input>{" "}
        <a href="https://www.ukrlp.co.uk/">
          <img
            id={css.ukprnLink}
            src="https://www.plymosteoclinic.co.uk/wp-content/uploads/2018/01/orange-clipart-question-mark-14.png"
            alt="question-mark"
          />
        </a>
      </form>

      <Link to="/register2">
        {" "}
        <button className={css.button}>Next</button>
      </Link>
    </div>
  );
}

export default ProviderDetails;
