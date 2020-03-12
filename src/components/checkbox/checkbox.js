import React from "react";
import "./checkbox.css";

function Checkbox({ handleCheckBoxChange, isChecked }) {
  return (
    <>
      <section className="section">
        {" "}
        <div className="div">
          <input type="checkbox" onChange={handleCheckBoxChange}></input>Finance
          Sign Off{isChecked}
        </div>
        <div className="div">
          <input type="checkbox" onChange={handleCheckBoxChange}></input>Legal
          Sign Off
        </div>
        <div className="div">
          <input type="checkbox" onChange={handleCheckBoxChange}></input>
          Management Sign Off
        </div>
        <p className="p">
          By ticking this box you agree that the terms of this contract are
          approved by your department.
        </p>
      </section>
    </>
  );
}

export default Checkbox;
