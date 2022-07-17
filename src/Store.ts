import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import sagaMiddleWare, { rootSaga } from "./sagas";
import { showReducer } from "./reducers/show";
import { showCastReducer } from "./reducers/Actors";
import { composeWithDevTools } from "@redux-devtools/extension";

export const reducer = combineReducers({
  shows: showReducer,
  actors: showCastReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga);

export type state = ReturnType<typeof store.getState>;

export default store;
