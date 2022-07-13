import axios from "axios";

export const getShows = async (query: string) => {
  const response = await axios.get(
    " https://api.tvmaze.com/search/shows?q=" + query
  );

  return response.data.map((s: any) => s.show);
};

export const getShow = async (showId: number) => {
  const response = await axios.get("https://api.tvmaze.com/shows/" + showId);
  return response.data;
};
