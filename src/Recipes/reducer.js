import actions from "./actions";

const initialState = {
  recipes: [],
  recipe: {},
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.STORE_RECIPES:
      newState.recipes = action.payload;
      return newState;
    case actions.STORE_RECIPE:
      newState.recipe = action.payload;
      return newState;
    default:
      return state;
  }
};

export default Reducer;
