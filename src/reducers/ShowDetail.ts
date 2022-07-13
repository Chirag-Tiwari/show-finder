import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_FETCH, SHOW_FETCHED } from "../actions/ShowActions";
import { show } from "../models/show";

export type showDetailState = {
  entities: { [id: number]: show };
  id: number;
};

export const initialShowDetailState = {
  entities: {},
  id: 0,
};

export const showDetailReducer: Reducer<showDetailState> = (
  state = initialShowDetailState,
  action
) => {
  switch (action.type) {
    case SHOW_FETCH:
      return {
        ...state,
        id: action.payload,
      };

    case SHOW_FETCHED:
      const { id, show } = action.payload as {
        id: number;
        show: show;
      };

      //   const showEntity = new schema.Entity("show");
      //   const normalizedData = normalize(show, [showEntity]);
      //   const normalizedShow = normalizedData.entities.show;
      return {
        ...state,
        entities: { ...state.entities, [id]: show },
      };
  }
  return state;
};
