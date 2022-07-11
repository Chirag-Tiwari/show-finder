import createSagaMiddleware from "redux-saga";
import { takeLatest } from "@redux-saga/core/effects";
import { SHOW_FETCH } from "../actions/ShowActions";
import { getShowsSaga } from "./Shows";

const sagaMiddleWare = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(SHOW_FETCH, getShowsSaga);
}

export default sagaMiddleWare;
