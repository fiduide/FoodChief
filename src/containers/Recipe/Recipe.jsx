import { Error, Ingredients, Tags } from "components/atoms";
import Loader from "components/atoms/Loader";
import NotFound from "components/atoms/NotFound";
import Steps from "components/atoms/Steps";
import { SecondHeader } from "components/organisms";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "services/foodApi";
import RecipeStyled from "./Recipe.styled";

const Random = () => {
  const { idRecipe } = useParams();
  const [recipeRandom, setRecipeRandom] = useState([]);
  const [ingredientMap, setingredientMap] = useState([]);
  const [stepMap, setStepMap] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let mounted = true;
    getRecipe(idRecipe)
      .then((recipes) => {
        if (mounted) {
          let recipe;
          if (idRecipe !== undefined) {
            recipe = recipes;
          } else {
            recipe = recipes.recipes[0];
          }

          setRecipeRandom(recipe);
          setingredientMap(recipe.extendedIngredients);
          setStepMap(recipe.analyzedInstructions[0].steps);
          setIsLoading(false);
        }
      })
      .catch((err) => setIsError(true));

    return () => (mounted = false);
  }, []);

  return (
    <RecipeStyled>
      <SecondHeader></SecondHeader>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="container">
            <div className="tags d-flex wrap align-items-center">
              <Tags
                bool={true}
                title={`Ready In ${recipeRandom.readyInMinutes} mins`}
              ></Tags>
              <Tags
                bool={true}
                title={`${recipeRandom.servings} People(s)`}
              ></Tags>
              <Tags
                bool={recipeRandom.vegetarian ? true : false}
                title="Vegetarian"
              ></Tags>
              <Tags
                bool={recipeRandom.vegan ? true : false}
                title="Vegan"
              ></Tags>
              <Tags
                bool={recipeRandom.glutenFree ? true : false}
                title="Gluten Free"
              ></Tags>
              <Tags
                bool={recipeRandom.dairyFree ? true : false}
                title="Dairy Free"
              ></Tags>
              <Tags
                bool={recipeRandom.veryHealthy ? true : false}
                title="Healthy"
              ></Tags>
            </div>
          </div>
          <div className="container d-flex wrap top-recipe">
            <div className="left">
              <h1>{recipeRandom.title}</h1>
              <img
                className="image-main"
                src={recipeRandom.image}
                alt={recipeRandom.title}
              />
              <h2>Ingredient's List :</h2>
              <div className="ingredients">
                {ingredientMap !== undefined ? (
                  ingredientMap.map((element) => (
                    <Ingredients ingredient={element}></Ingredients>
                  ))
                ) : (
                  <NotFound />
                )}
              </div>
            </div>
            <div className="right">
              <h2>Step By Step</h2>
              {stepMap !== undefined ? (
                stepMap.map((element) => <Steps step={element}></Steps>)
              ) : (
                <NotFound />
              )}
            </div>

            <div className="bottom-recipe-similar">TODO Similar recipe</div>
          </div>
        </>
      )}
    </RecipeStyled>
  );
};

export default Random;
