import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import "./recipeList.css";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} minutes</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook it</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
