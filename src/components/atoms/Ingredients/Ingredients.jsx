import IngredientsStyled from "./Ingredients.styled";

const Ingredients = ({ ingredient }) => {
  return (
    <IngredientsStyled>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
        alt={ingredient.name}
      />
      <div className="title">{ingredient.name}</div>
      <div className="secondTitle">
        {ingredient.measures.us.amount} {ingredient.measures.us.unitLong}
      </div>
    </IngredientsStyled>
  );
};

export default Ingredients;
