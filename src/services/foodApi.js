export async function getRecipe(idRecipe = null) {
  if (idRecipe === null) {
    return await fetch(
      "https://api.spoonacular.com/recipes/random?number=1&apiKey=bb94f7a8eff9426a994e449f3811e0bc"
    ).then(async (data) => {
      return await data.json();
    });
  } else {
    return await fetch(
      "https://api.spoonacular.com/recipes/" +
        idRecipe +
        "/information?apiKey=bb94f7a8eff9426a994e449f3811e0bc"
    ).then(async (data) => {
      return await data.json();
    });
  }
}

export async function getSearchedRecipes(search = null) {
  return await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=bb94f7a8eff9426a994e449f3811e0bc&query=" +
      search +
      "&number=15"
  ).then(async (data) => {
    return await data.json();
  });
}
