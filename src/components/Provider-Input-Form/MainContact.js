import React from "react";
import { Link } from "react-router-dom";
import "./form.css";
import Asset2 from "../../SVG/Asset2.svg";

function ProviderDetails({ providerData, takeInData }) {
  return (
    <div>
      <form className="form">
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
        <label for="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          onChange={takeInData}
          value={providerData.phoneNumber}
          name="phoneNumber"
        ></input>
        <br />
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={takeInData}
          value={providerData.email}
          name="email"
        ></input>
        <br />
        <label for="job">Job Title:</label>
        <input
          type="text"
          id="job"
          onChange={takeInData}
          value={providerData.jobTitle}
          name="jobTitle"
        ></input>
      </form>
      <section className="buttons">
        <Link to="/register1">
          <button className="button">Back</button>
        </Link>

        <Link to="/register3">
          <button className="button">Next</button>
        </Link>
      </section>
      <img src={Asset2} className="progress-bar" alt="progress-bar" />
    </div>
  );
}

export default ProviderDetails;
