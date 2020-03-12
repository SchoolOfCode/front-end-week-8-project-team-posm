import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contractItem.css";
const colors = ["red", "yellow", "green"];

function ContractItem({ children }) {
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
      ></span>
      <span
        class="dot"
        onClick={handleClick2}
        style={{ backgroundColor: colors[currentColor2] }}
      ></span>
      <span
        class="dot"
        onClick={handleClick3}
        style={{ backgroundColor: colors[currentColor3] }}
      ></span>
      <span
        class="dot"
        style={{ backgroundColor: "white", border: "white solid 1px" }}
      ></span>
      <Link to="/contract-page">
        <p>- Company Name / Contract ID</p>
      </Link>
      {children}
    </>
  );
}

export default ContractItem;
