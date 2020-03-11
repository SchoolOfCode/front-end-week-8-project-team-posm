import React from "react";

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
    <div>
      <h2>Summary</h2>
      <p>
        provider: {providerName}
        <br />
        pkurn: {UKPRN}
        <br />
        Contact Name: {firstName} {lastName}
        <br />
        Contact Number: {phoneNumber}
        <br />
        email: {email}
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
