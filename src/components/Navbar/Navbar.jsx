import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <Link to="/" className="brand">
            <h1>Recipe</h1>
          </Link>
          <SearchBar />
          <Link to="/create">Create Recipe</Link>
        </nav>
      </div>
      <label>
        <input type="checkbox" />
        <span>Dark mode</span>
      </label>
    </>
  );
};

export default Navbar;
