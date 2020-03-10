import React from "react";
import { Link } from "react-router-dom";
import css from "./Provider-Input-Form.module.css";

function PaymentProfile({ takeInData, providerData }) {
  return (
    <div>
      <form className={css.inputform}>
        <label for="bank-name"></label>Bank name:
        <input
          id="bank-name"
          type="text"
          onChange={takeInData}
          value={providerData.bankName}
          name="bankName"
        ></input>
        <br />
        <label for="account-number">Account Number:</label>
        <input
          id="account-number"
          type="number"
          onChange={takeInData}
          value={providerData.accountNumber}
          name="accountNumber"
        ></input>
        <br />
        <label for="sort-code">Sort Code:</label>
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
        <br />
      </form>
      <Link to="/register2">
        {" "}
        <button className={css.button}>Back</button>
      </Link>

      <Link to="/register4">
        {" "}
        <button className={css.button}>Next</button>
      </Link>
    </div>
  );
}

export default PaymentProfile;
