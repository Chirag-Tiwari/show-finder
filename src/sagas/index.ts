import createSagaMiddleware from "redux-saga";
import { takeLatest, takeLeading } from "@redux-saga/core/effects";
import { SHOWS_FETCH, SHOW_FETCH } from "../actions/ShowActions";
import { getShowsSaga } from "./Shows";
import { getShowSaga } from "./ShowDetail";

const sagaMiddleWare = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(SHOWS_FETCH, getShowsSaga);
  yield takeLeading(SHOW_FETCH, getShowSaga);
}

export default sagaMiddleWare;
