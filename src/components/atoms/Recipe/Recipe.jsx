import RecipeStyled from "./Recipe.styled";

const Recipe = ({ recipeInfo }) => {
  return (
    <RecipeStyled href={`/foodchief/recipe/${recipeInfo.id}/`}>
      <img src={recipeInfo.image} alt={recipeInfo.title} />
      <h2>{recipeInfo.title}</h2>
    </RecipeStyled>
  );
};

export default Recipe;
