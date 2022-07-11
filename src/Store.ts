import { applyMiddleware, createStore, Reducer } from "redux";
import { SHOW_FETCH, SHOW_FETCHED } from "./actions/ShowActions";
import sagaMiddleWare, { rootSaga } from "./sagas";
import { show } from "./models/show";

export type state = {
  shows: show[];
  showsQuery: string;
};

const initialState = {
  shows: [],
  showsQuery: "",
};

const reducer: Reducer<state> = (currentState = initialState, action) => {
  switch (action.type) {
    case SHOW_FETCH:
      return {
        ...currentState,
        showsQuery: action.payload,
      };

    case SHOW_FETCHED:
      return { ...currentState, shows: action.payload };
    default:
      return currentState;
  }
};

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;
