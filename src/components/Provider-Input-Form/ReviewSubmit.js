import React from "react";
import { Link, useHistory } from "react-router-dom";
import ProviderSummary from "./ProviderSummary";
import "./form.css";

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
    <div className="form">
      <ProviderSummary state={providerData} />

      <section className="buttons">
        <Link to="/register3">
          <button className="button">Back</button>
        </Link>
        <button type="submit" className="button" onClick={saveData}>
          Submit
        </button>
      </section>
    </div>
  );
}

export default ReviewSubmit;
