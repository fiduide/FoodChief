import { Link } from "react-router-dom";
import RecipeStyled from "./Recipe.styled";

const Recipe = ({ recipeInfo }) => {
  return (
    <RecipeStyled>
      <Link to={`/foodchief/recipe/${recipeInfo.id}/`}>
        <img src={recipeInfo.image} alt={recipeInfo.title} />
        <h2>{recipeInfo.title}</h2>
      </Link>
    </RecipeStyled>
  );
};

export default Recipe;
