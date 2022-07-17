import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_CAST_FETCHED } from "../actions/ShowActions";
import { actor } from "../models/Actors";

type state = {
  entities: { [id: number]: actor };
};

const initialState = {
  entities: {},
};

export const showCastReducer: Reducer<state> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOW_CAST_FETCHED:
      const actors = action.payload.actors;
      const actorsEntity = new schema.Entity("actors");
      const normalizedData = normalize(actors, [actorsEntity]);
      const normalizedActors = normalizedData.entities.actors;

      return {
        ...state,
        entities: {
          ...state.entities,
          ...normalizedActors,
        },
      };
  }
  return state;
};
