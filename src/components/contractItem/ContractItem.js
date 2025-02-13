import React, { useState } from "react";
import "./contractItem.css";
import { Link } from "react-router-dom";
const colors = ["red", "yellow", "green"];

function ContractItem({ provider_name, contract_id }) {
  const [currentColor1, setColor1] = useState(0);
  const [currentColor2, setColor2] = useState(0);
  const [currentColor3, setColor3] = useState(0);

  function handleClick1() {
    if (currentColor1 < 2) {
      setColor1(currentColor1 + 1);
    } else {
      setColor1(0);
    }
  }
  function handleClick2() {
    if (currentColor2 < 2) {
      setColor2(currentColor2 + 1);
    } else {
      setColor2(0);
    }
  }
  function handleClick3() {
    if (currentColor3 < 2) {
      setColor3(currentColor3 + 1);
    } else {
      setColor3(0);
    }
  }
  return (
    <>
      <span
        class="dot"
        onClick={handleClick1}
        style={{ backgroundColor: colors[currentColor1] }}
      >
        M
      </span>
      <span
        class="dot"
        onClick={handleClick2}
        style={{ backgroundColor: colors[currentColor2] }}
      >
        F
      </span>
      <span
        class="dot"
        onClick={handleClick3}
        style={{ backgroundColor: colors[currentColor3] }}
      >
        L
      </span>

      <span
        class="dot"
        style={{ backgroundColor: "white", border: "white solid 1px" }}
      ></span>

      <span className="contract-name">
        <Link to={`/contract-page/${contract_id}`}>
          <>
            <span>{provider_name}</span> /
            <span id="goToContract"> {contract_id}</span>
          </>
        </Link>
      </span>

      <hr></hr>
    </>
  );
}

export default ContractItem;
