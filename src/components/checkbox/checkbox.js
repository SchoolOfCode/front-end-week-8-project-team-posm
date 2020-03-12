import React, { useState } from "react";
import "./checkbox.css";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBoxChange() {
    setIsChecked(!isChecked);

    console.log(isChecked);
  }
  return (
    <>
      <section className="section">
        <h4>Sign Off</h4>
        <p className="p">
          By ticking this box you agree that the terms of this contract are
          approved by your department.
        </p>
        <div className="div">
          <input type="checkbox" onChange={handleCheckBoxChange}></input>{" "}
          Finance Sign Off
          <input maxLength="4" type="password" className="code"></input>
        </div>
        <div className="div">
          <input type="checkbox" onChange={handleCheckBoxChange}></input> Legal
          Sign Off<input maxLength="4" type="password" className="code"></input>
        </div>
        <div className="div">
          <input type="checkbox" onChange={handleCheckBoxChange}></input>{" "}
          Management Sign Off
          <input maxLength="4" type="password" className="code"></input>
        </div>
      </section>
    </>
  );
}

export default Checkbox;
