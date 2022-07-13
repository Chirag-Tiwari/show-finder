import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import sagaMiddleWare, { rootSaga } from "./sagas";
import { showReducer } from "./reducers/show";

export const reducer = combineReducers({ shows: showReducer });

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export type state = ReturnType<typeof store.getState>;

export default store;
