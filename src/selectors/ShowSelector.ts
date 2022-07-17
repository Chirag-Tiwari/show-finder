import { createSelector } from "reselect";
import { actor } from "../models/Actors";
import { state } from "../Store";

const showStateSelector = (s: state) => s.shows;
const actorStateSelector = (s: state) => s.actors;

const showAgainstQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.againstQuery
);

export const showEntitiesSelector = createSelector(
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

export const showLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.showLoading
);

export const showsLoadingSelectors = createSelector(
  showStateSelector,
  (showState) => showState.showsLoading
);

export const showActorLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.showActorLoading
);

export const actorEntitiesSelector = createSelector(
  actorStateSelector,
  (actorState) => actorState.entities
);

const showActorIdSelector = createSelector(
  showStateSelector,
  (showState) => showState.actors
);

export const showActorsSelector = createSelector(
  showActorIdSelector,
  actorEntitiesSelector,
  (showActorIds, actorsEntities) => {
    return Object.keys(showActorIds).reduce<{ [id: number]: actor[] }>(
      (showActors, showId) => {
        const actorIds = showActorIds[+showId];
        const actors = actorIds.map((id) => actorsEntities[id]);
        return { ...showActors, [showId]: actors };
      },
      {}
    );
  }
);
