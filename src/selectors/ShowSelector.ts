import { state } from "../Store";

export const showsSelector = (s: state) => s.shows[s.showsQuery] || [];
export const showsQuerySelector = (s: state) => s.showsQuery;
