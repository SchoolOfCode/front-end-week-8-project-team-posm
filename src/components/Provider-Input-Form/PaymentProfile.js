import React from "react";
import css from "./Provider-Input-Form.modules.css";

function PaymentProfile() {
  const sortcodeRegex = / /;
  return (
    <div>
      <form className={css.inputform}>
        <label for="bank-name"></label>Bank name:
        <input id="bank-name" type="text"></input>
        <br />
        <label for="account-number">Account Number:</label>
        <input id="account-number" type="number"></input>
        <br />
        <label for="sort-code">Sort Code:</label>
        <input id="sort-code" type="text" maxlength="2" size="2" />
        -
        <input type="text" maxlength="2" size="2" />
        -
        <input type="text" maxlength="2" size="2" />
        <br />
      </form>
    </div>
  );
}

export default PaymentProfile;
