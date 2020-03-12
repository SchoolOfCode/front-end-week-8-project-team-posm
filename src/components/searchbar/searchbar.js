import React from "react";
import searchIcon from "./searchIcon.png";
import "./searchbar.css";

function Searchbar({ input, handleSetInput }) {
  return (
    <>
      <input
        value={input}
        onChange={handleSetInput}
        placeholder="Search"
        className="searchBar"
      />
      <img className="searchIcon" src={searchIcon} />
    </>
  );
}

export default Searchbar;
