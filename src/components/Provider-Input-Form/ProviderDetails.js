import React from "react";
import { Link } from "react-router-dom";
import "./form.css";
import Asset1 from "../../SVG/Asset1.svg";

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
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ukrlp.co.uk/"
          >
            <img
              id="ukprnLink"
              src="https://www.plymosteoclinic.co.uk/wp-content/uploads/2018/01/orange-clipart-question-mark-14.png"
              alt="question-mark"
            />
          </a>
          <label for="ukprn">UKPRN:</label>
        </span>

        <input
          type="text"
          id="ukprn"
          onChange={takeInData}
          value={providerData.ukprn}
          name="ukprn"
        ></input>
      </form>
      <section className="buttons">
        <Link to="/register2">
          <button
            className="button"
            style={{ color: "white", border: "white" }}
          >
            Next
          </button>
        </Link>
        <Link to="/register2">
          <button className="button">Next</button>
        </Link>
      </section>
      <img src={Asset1} className="progress-bar" alt="progress-bar" />
    </div>
  );
}

export default ProviderDetails;
