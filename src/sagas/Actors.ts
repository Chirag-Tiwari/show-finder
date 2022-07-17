import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { showCastActionFetched } from "../actions/ShowActions";
import { getShowCast } from "../Api";
import { actor } from "../models/Actors";

export function* getShowCastSaga(action: AnyAction): Generator<any, any, any> {
  const showId = action.payload;
  const data = yield call(getShowCast, showId);
  const actors = (data as { person: actor }[]).map((d) => d.person);
  yield put(showCastActionFetched(showId, actors));
}
