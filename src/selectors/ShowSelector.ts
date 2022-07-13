import { createSelector } from "reselect";
import { state } from "../Store";

const showStateSelector = (s: state) => s.shows;

const showAgainstQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.againstQuery
);

const showEntitiesSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);

// export const showsQuerySelector = (s: state) => s.shows.query;
export const showsQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);

const showsIdSelector = createSelector(
  showAgainstQuerySelector,
  showsQuerySelector,
  (againstQuery, query) => againstQuery[query] || []
);

// export const showsQuerySelector = (s: state) => s.shows.query;

// export const showsSelector = (s: state) => {
//   const showsId = s.shows.againstQuery[s.shows.query] || [];
//   return showsId.map((id) => s.shows.entities[id]);
// };
export const showsSelector = createSelector(
  showsIdSelector,
  showEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id])
);
