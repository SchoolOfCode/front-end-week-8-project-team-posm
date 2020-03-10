import React from "react";

function ProviderSummary({ state }) {
  const {
    provider,
    pkurn,
    firstName,
    lastName,
    phone,
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
        provider: {provider}
        <br />
        pkurn: {pkurn}
        <br />
        Contact Name: {firstName} {lastName}
        <br />
        Contact Number: {phone}
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
