import { call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { showDetailFetched } from "../actions/ShowActions";
import { getShow } from "../Api";

export function* getShowSaga(action: AnyAction): Generator<any, any, any> {
  if (!action.payload) {
    return;
  }
  const data = yield call(getShow, action.payload);
  yield put(showDetailFetched(action.payload, data));
}
