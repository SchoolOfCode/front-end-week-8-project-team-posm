import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

function ProviderSummary({ state, saveData }) {
  const {
    providerName,
    UKPRN,
    firstName,
    lastName,
    phoneNumber,
    email,
    jobTitle,
    bankName,
    accountNumber,
    sortCode1,
    sortCode2,
    sortCode3
  } = state;
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>
        Provider: {providerName}
        <br />
        UKPRN: {UKPRN}
        <br />
        Contact Name: {firstName} {lastName}
        <br />
        Contact Number: {phoneNumber}
        <br />
        Email: {email}
        <br />
        Job Title: {jobTitle}
        <br />
        Bank Name: {bankName}
        <br />
        Account Number: {accountNumber}
        <br />
        Sort Code: {sortCode1}-{sortCode2}-{sortCode3}
      </p>
      <section className="finalbuttons">
        <Link to="/register3">
          <button className="button">Back</button>
        </Link>
        <button type="submit" className="button" id="submit" onClick={saveData}>
          Submit
        </button>
      </section>
    </div>
  );
}

export default ProviderSummary;
