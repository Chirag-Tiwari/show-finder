import { ChangeEvent, FC, useEffect } from "react";
import { connect } from "react-redux";
import { showFetch } from "../actions/ShowActions";
import { show } from "../models/show";
import { showsQuerySelector, showsSelector } from "../selectors/ShowSelector";
import { state } from "../Store";
import Show from "./Show";

type ShowListProps = {
  query: string;
  shows: show[];
  showsFetch: (query: string) => void;
};

const ShowList: FC<ShowListProps> = ({ shows, showsFetch, query }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    showsFetch(event.target.value);
  };
  return (
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
          <Show key={s.id} show={s}></Show>
        ))}
      </div>
    </div>
  );
};

ShowList.defaultProps = {};

const mapStateToProps = (s: state) => ({
  shows: showsSelector(s),
  query: showsQuerySelector(s),
});

const mapDispatchToProps = {
  showsFetch: showFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
