import React from "react";
import { useHistory } from "react-router-dom";

import ProviderSummary from "./ProviderSummary";
import "./form.css";
import Asset4 from "../../SVG/Asset4.svg";
import { SERVER_URL } from "../../config";

function ReviewSubmit({ providerData, setSuccess, success }) {
  const history = useHistory();
  function saveData() {
    const {
      providerName,
      UKPRN,
      firstName,
      lastName,
      accountNumber,
      sortCode1,
      sortCode2,
      sortCode3,
      phoneNumber,
      email,
      jobTitle
    } = providerData;
    const sortCode = `${sortCode1}-${sortCode2}-${sortCode3}`;
    const mainContact = `${firstName} ${lastName}`;
    fetch(`${SERVER_URL}/providers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        providerName,
        UKPRN,
        sortCode,
        accountNumber,
        mainContact
      })
    })
      .then(response => response.json())
      .then(data => console.log(data.success))
      .catch(err => console.log(err));

    fetch(`${SERVER_URL}/persons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        jobTitle
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSuccess(data.success);
        history.push("/thanks");
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <div className="form">
        <ProviderSummary state={providerData} saveData={saveData} />
      </div>
      <img src={Asset4} className="progress-bar" alt="progress-bar" />
    </>
  );
}

export default ReviewSubmit;
