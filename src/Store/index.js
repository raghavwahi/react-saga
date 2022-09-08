import { applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createStore } from "redux";

import recipesReducer from "./../Recipes/reducer";
import rootSagas from "./sagas";

const rootReduer = combineReducers({
  recipes: recipesReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReduer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export { store };
