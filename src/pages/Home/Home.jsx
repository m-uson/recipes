import React, { useEffect } from "react";
import { RecipeList } from "../../components";
import { useFetch } from "../../hooks/useFetch.js";
import "./home.css";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:3001/recipes");

  return (
    <div className="home">
      {error && <div className="error">error</div>}
      {isLoading && <div className="loading ">Loading ....</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
