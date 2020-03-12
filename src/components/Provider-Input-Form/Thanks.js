import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

function Thanks({ providerName }) {
  return (
    <div className="thanks">
      <h1>Thank you, {providerName}</h1>
      <br />
      <h3>You have successfully submitted your details.</h3>
      <Link to="/home">
        <button className="button" id="submitcontract">
          Back to Login
        </button>
      </Link>
    </div>
  );
}

export default Thanks;
