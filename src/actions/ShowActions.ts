import { actor } from "../models/Actors";
import { show } from "../models/show";

export const SHOWS_FETCH = "shows fetch";
export const SHOWS_FETCHED = "shows fetched";

export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const SHOW_CAST_FETCH = "show cast fetch";
export const SHOW_CAST_FETCHED = "show cast fetched";

export const showFetch = (query: string) => ({
  type: SHOWS_FETCH,
  payload: query,
});

export const showFetched = (query: string, shows: show[]) => ({
  type: SHOWS_FETCHED,
  payload: { query, shows },
});

export const showDetailFetch = (showId: number) => ({
  type: SHOW_FETCH,
  payload: showId,
});

export const showDetailFetched = (show: show) => ({
  type: SHOW_FETCHED,
  payload: show,
});

export const showCastActionFetch = (showId: number) => ({
  type: SHOW_CAST_FETCH,
  payload: showId,
});

export const showCastActionFetched = (showId: number, actors: actor[]) => ({
  type: SHOW_CAST_FETCHED,
  payload: { showId, actors },
});
