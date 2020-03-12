import React from "react";
import "./form.css";

function Thanks({ providerName }) {
  return (
    <div className="thanks">
      <h1>Thank you, {providerName}</h1>
      <br />
      <h3>You have successfully submitted your details.</h3>
    </div>
  );
}

export default Thanks;
