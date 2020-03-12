import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingWrapper">
      <h2>Which Page?</h2>
      <Link to="/login">
        <div className="landingButton">Employee Login</div>
      </Link>
      <Link to="/register1">
        <div className="landingButton">Provider Registration</div>
      </Link>
    </div>
  );
}

export default LandingPage;
