import React, { useContext } from "react";
import { RecipeList } from "../../components";
import { ThemeContext } from "../../context/ThemeContext";
import { useFetch } from "../../hooks/useFetch.js";
import "./home.css";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:3001/recipes");
  const uson = useContext(ThemeContext);

  return (
    <div className="home">
      {error && <div className="error">error</div>}
      {isLoading && <div className="loading ">Loading ....</div>}
      {data && <RecipeList recipes={data} uson={uson} />}
    </div>
  );
};

export default Home;
