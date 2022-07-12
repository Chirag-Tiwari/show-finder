import { show } from "../models/show";

export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const showFetch = (query: string) => ({
  type: SHOW_FETCH,
  payload: query,
});

export const showFetched = (query: string, shows: show[]) => ({
  type: SHOW_FETCHED,
  payload: { query, shows },
});
