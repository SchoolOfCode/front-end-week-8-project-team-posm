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
      <img className="searchIcon" alt="search icon" src={searchIcon} />
    </>
  );
}

export default Searchbar;

// PLAN FOR SEARCH
// may need a route for search contracts by company name or ID @
// useEffect ()=> fetch(contracts). res.json -> data -> map
// through array display all contract id's and company names
// make a new peice of state too store "options" of things that match the search
