import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_FETCH, SHOW_FETCHED } from "../actions/ShowActions";
import { show } from "../models/show";

export type showState = {
  entities: { [id: number]: show };
  againstQuery: { [query: string]: number[] };
  query: string;
};

export const initialShowState = {
  entities: {},
  againstQuery: {},
  query: "",
};

export const showReducer: Reducer<showState> = (
  state = initialShowState,
  action
) => {
  switch (action.type) {
    case SHOW_FETCH:
      return {
        ...state,
        query: action.payload,
      };

    case SHOW_FETCHED:
      const { query, shows } = action.payload as {
        query: string;
        shows: show[];
      };

      const showEntity = new schema.Entity("shows");
      const normalizedData = normalize(shows, [showEntity]);
      const normalizedShows = normalizedData.entities.shows;
      const ids = shows.map((s) => s.id);
      return {
        ...state,
        entities: { ...state.entities, ...normalizedShows },
        againstQuery: { ...state.againstQuery, [query]: ids },
      };
    default:
      return state;
  }
};
