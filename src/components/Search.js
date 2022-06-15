import React, { useState } from "react";

function Search({ plants }) {
const [searchText, setSearchText] = useState()

function handleSearchChange(e) {
  console.log(e.target.value)
}

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchText}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
