import createSagaMiddleware from "redux-saga";
import { takeLatest, takeEvery } from "@redux-saga/core/effects";
import {
  SHOWS_FETCH,
  SHOW_CAST_FETCH,
  SHOW_FETCH,
} from "../actions/ShowActions";
import { getShowsSaga, getShowSaga } from "./Shows";
import { getShowCastSaga } from "./Actors";

const sagaMiddleWare = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(SHOWS_FETCH, getShowsSaga);
  yield takeEvery(SHOW_FETCH, getShowSaga);
  yield takeEvery(SHOW_CAST_FETCH, getShowCastSaga);
}

export default sagaMiddleWare;
