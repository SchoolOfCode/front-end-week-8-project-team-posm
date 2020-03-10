import React from "react";
import css from "./Provider-Input-Form.modules.css";

function ProviderDetails() {
  return (
    <div>
      <form className={css.inputform}>
        <label for="contact-fname">First Name:</label>
        <input type="text" id="contact-fname"></input>
        <label for="contact-lname">Last Name:</label>
        <input type="text" id="contact-lname"></input>
        <label for="phone">phone:</label>
        <input type="text" id="phone"></input>
        <label for="email">email:</label>
        <input type="text" id="email"></input>
        <label for="job">job title:</label>
        <input type="text" id="job"></input>
      </form>
    </div>
  );
}

export default ProviderDetails;
