import React from "react";
import { Link, useHistory } from "react-router-dom";

import ProviderSummary from "./ProviderSummary";
import "./form.css";
import Asset4 from "../../SVG/Asset4.svg";

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
    fetch(`http://localhost:5000/providers`, {
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

    fetch(`http://localhost:5000/persons`, {
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
