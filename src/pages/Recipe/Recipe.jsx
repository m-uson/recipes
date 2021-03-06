import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import useTheme from "../../hooks/useTheme";
import "./recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const { data, isLoading, error } = useFetch(
    "http://localhost:3001/recipes/" + id
  );

  return (
    <div className={`recipe ${mode}`}>
      {error && <div className="error">error</div>}
      {isLoading && <div className="loading ">Loading ....</div>}
      {data && (
        <>
          {data && (
            <>
              <h2 className={`page ${mode}`}>{data.title}</h2>
              <p className={`cooking ${mode}`}>
                Takes {data.cookingTime} minutes to cook
              </p>
              <ul>
                {data.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
              <p className={`method ${mode}`}>{data.method}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Recipe;
