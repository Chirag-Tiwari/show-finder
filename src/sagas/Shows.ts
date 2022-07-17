import { call, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { showDetailFetched, showFetched } from "../actions/ShowActions";
import { getShow, getShows } from "../Api";

export function* getShowsSaga(action: AnyAction): Generator<any, any, any> {
  const query = action.payload;
  yield delay(1000);
  if (!action.payload) {
    return;
  }
  const data = yield call(getShows, query);
  // const action = showFetched(data);
  yield put(showFetched(query, data));
}

export function* getShowSaga(action: AnyAction): Generator<any, any, any> {
  const showId: number = action.payload;
  const data = yield call(getShow, showId);
  yield put(showDetailFetched(data));
}
