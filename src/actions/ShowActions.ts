import { show } from "../models/show";

export const SHOWS_FETCH = "shows fetch";
export const SHOWS_FETCHED = "shows fetched";

export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

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

export const showDetailFetched = (id: number, show: show) => ({
  type: SHOW_FETCHED,
  payload: { id, show },
});
