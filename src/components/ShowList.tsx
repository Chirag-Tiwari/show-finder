import { ChangeEvent, FC, useEffect } from "react";
import { connect } from "react-redux";
import { showFetch } from "../actions/ShowActions";
import { show } from "../models/show";
import {
  showsLoadingSelectors,
  showsQuerySelector,
  showsSelector,
} from "../selectors/ShowSelector";
import { state } from "../Store";
import Show from "./Show";
import Spinner from "./Spinner";

type ShowListProps = {
  query: string;
  shows: show[];
  showsFetch: (query: string) => void;
  loading: boolean;
};

const ShowList: FC<ShowListProps> = ({ shows, showsFetch, query, loading }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    showsFetch(event.target.value);
  };

  return (
    <>
      {query && loading && <Spinner />}
      <div className="space-y-3 m-3">
        <input
          className="border border-gray-700 rounded-md "
          placeholder="Search show"
          value={query}
          onChange={handleChange}
        />

        <h1 className="text-2xl font-extrabold">List Of Shows</h1>
        <div className="space-y-4 ">
          {shows.map((s) => (
            <Show key={s.id} show={s} query={query}></Show>
          ))}
        </div>
      </div>
    </>
  );
};

ShowList.defaultProps = {};

const mapStateToProps = (s: state) => ({
  shows: showsSelector(s),
  query: showsQuerySelector(s),
  loading: showsLoadingSelectors(s),
});

const mapDispatchToProps = {
  showsFetch: showFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
