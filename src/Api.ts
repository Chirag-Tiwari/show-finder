import axios from "axios";
import { actor } from "./models/Actors";
import { show } from "./models/show";

export const getShows = async (query: string) => {
  const response = await axios.get<{ show: show }[]>(
    " https://api.tvmaze.com/search/shows?q=" + query
  );

  return response.data.map((s: any) => s.show);
};

export const getShow = async (showId: number) => {
  const response = await axios.get<show>(
    "https://api.tvmaze.com/shows/" + showId
  );
  return response.data;
};

export const getShowCast = async (showId: number) => {
  const response = await axios.get<{ person: actor }[]>(
    "https://api.tvmaze.com/shows/" + showId + "/cast"
  );
  return response.data;
};
