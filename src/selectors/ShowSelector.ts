import { state } from "../Store";

export const showsSelector = (s: state) => s.shows;
export const showsQuerySelector = (s: state) => s.showsQuery;
