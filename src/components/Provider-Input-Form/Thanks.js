import React from "react";

function Thanks({ providerName }) {
  return (
    <div>
      <h1>Thank you, {providerName}</h1>
      <h3>You have successfully submitted your details.</h3>
    </div>
  );
}

export default Thanks;
