import React from "react";
import { Link } from "react-router-dom";
import "./form.css";

function ProviderDetails({ takeInData, providerData }) {
  return (
    <div>
      <form className="form">
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

        <a href="https://www.ukrlp.co.uk/">
          <img
            id="ukprnLink"
            src="https://www.plymosteoclinic.co.uk/wp-content/uploads/2018/01/orange-clipart-question-mark-14.png"
            alt="question-mark"
          />
        </a>
        <label for="ukprn">UKPRN:</label>

        <input
          type="text"
          id="ukprn"
          onChange={takeInData}
          value={providerData.UKPRN}
          name="UKPRN"
        ></input>
      </form>
      <section className="buttons">
        <Link to="/register2">
          <button className="button">Next</button>
        </Link>
      </section>
    </div>
  );
}

export default ProviderDetails;
