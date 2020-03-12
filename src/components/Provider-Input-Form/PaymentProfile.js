import React from "react";
import { Link } from "react-router-dom";
import "./form.css";
import Asset3 from "../../SVG/Asset3.svg";

function PaymentProfile({ takeInData, providerData }) {
  return (
    <div>
      <form className="form">
        <label for="bank-name">Bank name:</label>
        <input
          id="bank-name"
          type="text"
          onChange={takeInData}
          value={providerData.bankName}
          name="bankName"
        ></input>
        <label for="account-number">Account Number:</label>
        <input
          id="account-number"
          type="number"
          onChange={takeInData}
          value={providerData.accountNumber}
          name="accountNumber"
        ></input>
        <label for="sort-code">Sort Code:</label>
        <section className="sort">
          <input
            id="sort-code"
            type="text"
            maxlength="2"
            size="2"
            onChange={takeInData}
            value={providerData.sortCode1}
            name="sortCode1"
          />
          -
          <input
            type="text"
            maxlength="2"
            size="2"
            onChange={takeInData}
            value={providerData.sortCode2}
            name="sortCode2"
          />
          -
          <input
            type="text"
            maxlength="2"
            size="2"
            onChange={takeInData}
            value={providerData.sortCode3}
            name="sortCode3"
          />
        </section>
      </form>
      <section className="buttons">
        <Link to="/register2">
          <button className="button">Back</button>
        </Link>

        <Link to="/register4">
          <button className="button">Next</button>
        </Link>
      </section>
      <img src={Asset3} className="progress-bar" alt="progress-bar" />
    </div>
  );
}

export default PaymentProfile;
