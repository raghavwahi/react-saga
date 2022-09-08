import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";

function* fetchAPI(path, id = undefined) {
  const url = yield `http://localhost:6556/${path}${id ? `/${id}` : ""}`;
  const res = yield axios.get(url);
  const data = yield res.data;
  return data;
}

function* fetchRecipes(action) {
  if (action.type === actions.FETCH_RECIPES) {
    const result = yield call(fetchAPI, "recipes");
    yield put(actions.storeRecipes(result));
  } else if (action.type === actions.FETCH_RECIPE) {
    const result = yield call(fetchAPI, "recipes", action.payload.id);
    yield put(actions.storeRecipe(result));
  }
}
export default function* watcherSaga() {
  yield takeLatest([actions.FETCH_RECIPES, actions.FETCH_RECIPE], fetchRecipes);
}
