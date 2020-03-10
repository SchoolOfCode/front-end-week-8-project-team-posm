import React from "react";
import css from "./Provider-Input-Form.modules.css";

function ProviderDetails() {
  return (
    <div>
      <form className={css.inputform}>
        <label for="prov-name">Provider Name:</label>
        <input type="text" id="prov-name"></input>
        <label for="pkurn">PKURN</label>
        <input type="text" id="pkurn"></input>
      </form>
    </div>
  );
}

export default ProviderDetails;
