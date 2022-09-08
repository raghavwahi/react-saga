const actions = {
  STORE_RECIPES: "STORE_RECIPES",
  storeRecipes: (payload) => {
    return {
      type: actions.STORE_RECIPES,
      payload,
    };
  },
  STORE_RECIPE: "STORE_RECIPE",
  storeRecipe: (payload) => {
    return {
      type: actions.STORE_RECIPE,
      payload,
    };
  },
  FETCH_RECIPES: "FETCH_RECIPES",
  fetchRecipes: () => {
    return {
      type: actions.FETCH_RECIPES,
    };
  },
  FETCH_RECIPE: "FETCH_RECIPE",
  fetchRecipe: (payload) => {
    return {
      type: actions.FETCH_RECIPE,
      payload
    };
  },
};

export default actions;
