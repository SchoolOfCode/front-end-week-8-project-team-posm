import React, { useState } from "react";
import "./Dashboard.css";
const colors = ["red", "yellow", "green"];

function ContractItem() {
  const [currentColor, setColor] = useState(0);
  function handleClick() {
    if (currentColor < 2) {
      setColor(currentColor + 1);
    } else {
      setColor(0);
    }
  }
  return (
    <>
      <span
        class="dot"
        onClick={handleClick}
        style={{ backgroundColor: colors[currentColor] }}
      ></span>
      <span
        class="dot"
        onClick={handleClick}
        style={{ backgroundColor: colors[currentColor] }}
      ></span>
      <span
        class="dot"
        onClick={handleClick}
        style={{ backgroundColor: colors[currentColor] }}
      ></span>
      <p> - Contract Name</p> <br />
    </>
  );
}

export default ContractItem;
