import ListRecipesStyled from "./ListRecipes.styled";
import { useEffect, useState } from "react";
import { getSearchedRecipes } from "services/foodApi";
import Recipe from "components/atoms/Recipe";
import Loader from "components/atoms/Loader";
import { Error } from "components/atoms";
import NotFound from "components/atoms/NotFound";

const ListRecipes = ({ search }) => {
  const [searchRecipes, setSearchRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let mounted = true;
    getSearchedRecipes(search)
      .then((recipes) => {
        if (mounted) {
          setSearchRecipes(recipes.results);
          setIsLoading(false);
          if (recipes.results === undefined) setIsError(true);
        }
      })
      .catch(() => setIsError(true));

    return () => (mounted = false);
  }, [search]);

  return (
    <ListRecipesStyled>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : searchRecipes == undefined ? (
        <NotFound />
      ) : (
        searchRecipes.map((element) => {
          return <Recipe recipeInfo={element}></Recipe>;
        })
      )}
    </ListRecipesStyled>
  );
};

export default ListRecipes;
