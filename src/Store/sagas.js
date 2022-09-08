import { all } from "redux-saga/effects";
import recipesSaga from "./../Recipes/saga";

export default function* rootSagas() {
  yield all([recipesSaga()]);
}
