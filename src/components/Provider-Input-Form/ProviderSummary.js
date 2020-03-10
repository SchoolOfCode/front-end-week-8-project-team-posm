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
      <p>
        provider: {provider}
        pkurn: {pkurn}
        Contact Name: {firstName} {lastName}
        Contact Number: {phone}
        email: {email}
        Job Title: {jobTitle}
        Bank Name: {bankName}
        Account Number: {accountNumber}
        Sort Code: {sortCode1}-{sortCode2}-{sortCode3}: ""
      </p>
    </div>
  );
}

export default ProviderSummary;
