import React from "react";
import { Link } from "react-router-dom";
import css from "./Provider-Input-Form.module.css";

function ProviderDetails({ providerData, takeInData }) {
  return (
    <div>
      <form className={css.inputForm}>
        <label for="contact-fname">First Name:</label>
        <input
          type="text"
          id="contact-fname"
          onChange={takeInData}
          value={providerData.firstName}
          name="firstName"
        ></input>
        <br />
        <label for="contact-lname">Last Name:</label>
        <input
          type="text"
          id="contact-lname"
          onChange={takeInData}
          value={providerData.lastName}
          name="lastName"
        ></input>
        <br />
        <label for="phone">phone:</label>
        <input
          type="text"
          id="phone"
          onChange={takeInData}
          value={providerData.phoneNumber}
          name="phoneNumber"
        ></input>
        <br />
        <label for="email">email:</label>
        <input
          type="text"
          id="email"
          onChange={takeInData}
          value={providerData.email}
          name="email"
        ></input>
        <br />
        <label for="job">job title:</label>
        <input
          type="text"
          id="job"
          onChange={takeInData}
          value={providerData.jobTitle}
          name="jobTitle"
        ></input>
      </form>
      <Link to="/register1">
        {" "}
        <button className={css.button}>Back</button>
      </Link>

      <Link to="/register3">
        {" "}
        <button className={css.button}>Next</button>
      </Link>
    </div>
  );
}

export default ProviderDetails;
