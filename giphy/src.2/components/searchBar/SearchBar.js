import React, { useState, useEffect, useRef } from "react";
import "./searchBar.scss";

const SearchBar = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = event => setSearchTerm(event.target.value);

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSubmit(event, searchTerm);
    }
  };

  return (
    <div className="search_bar">
      <form>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          onChange={handleChange}
          onKeyPress={onKeyPress}
          value={searchTerm}
          ref={inputRef}
        />
        <button type="submit" onClick={e => handleSubmit(e, searchTerm)}>
          Go
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
