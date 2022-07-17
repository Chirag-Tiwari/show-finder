import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import {
  SHOWS_FETCH,
  SHOWS_FETCHED,
  SHOW_CAST_FETCH,
  SHOW_CAST_FETCHED,
  SHOW_FETCH,
  SHOW_FETCHED,
} from "../actions/ShowActions";
import { actor } from "../models/Actors";
import { show } from "../models/show";

export type showState = {
  showLoading: { [id: number]: boolean };
  entities: { [id: number]: show };
  againstQuery: { [query: string]: number[] };
  query: string;
  actors: { [showId: number]: number[] };
};

export const initialShowState = {
  entities: {},
  againstQuery: {},
  query: "",
  showLoading: {},
  actors: {},
};
export const showReducer: Reducer<showState> = (
  state = initialShowState,
  action
) => {
  switch (action.type) {
    case SHOW_FETCH:
      return {
        ...state,
        showLoading: { ...state.showLoading, [action.payload]: true },
      };

    case SHOW_FETCHED:
      const show: show = action.payload;
      return {
        ...state,
        entities: { ...state.entities, [show.id]: show },
        showLoading: { ...state.showLoading, [show.id]: false },
      };

    case SHOWS_FETCH:
      return {
        ...state,
        query: action.payload,
      };

    case SHOWS_FETCHED:
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

    case SHOW_CAST_FETCHED:
      const { showId, actors } = action.payload as {
        showId: number;
        actors: actor[];
      };
      const actorIds = actors.map((a) => a.id);
      return { ...state, actors: { ...state.actors, [showId]: actorIds } };

    default:
      return state;
  }
};
