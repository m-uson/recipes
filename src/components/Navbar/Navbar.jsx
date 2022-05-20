import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css";

const Navbar = () => {
  const { color } = useTheme();

  return (
    <>
      <div className="navbar" style={{ backgroundColor: color }}>
        <nav>
          <Link to="/" className="brand">
            <h1>Recipe</h1>
          </Link>
          <SearchBar />
          <Link to="/create">Create Recipe</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
