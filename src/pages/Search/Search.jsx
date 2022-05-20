import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { RecipeList } from "../../components";
import { useLocation } from "react-router-dom";

const Search = () => {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);

  const query = queryParams.get("q");

  const url = `http://localhost:3001/recipes?q=${query}`;

  const { data, isLoading, error } = useFetch(url);

  return (
    <div>
      {error && <div className="error">error</div>}
      {isLoading && <div className="loading ">Loading ....</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
