import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${term}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          id="search"
          type="text"
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
