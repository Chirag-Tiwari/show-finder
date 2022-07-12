import { call, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { showFetched } from "../actions/ShowActions";
import { getShows } from "../Api";

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
