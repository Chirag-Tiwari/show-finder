import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import sagaMiddleWare, { rootSaga } from "./sagas";
import { showReducer } from "./reducers/show";
import { showDetailReducer } from "./reducers/ShowDetail";

export const reducer = combineReducers({
  shows: showReducer,
  showDetail: showDetailReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export type state = ReturnType<typeof store.getState>;

export default store;
