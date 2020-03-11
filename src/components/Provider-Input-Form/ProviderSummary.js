import React from "react";
import "./form.css";

function ProviderSummary({ state }) {
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
    </div>
  );
}

export default ProviderSummary;
