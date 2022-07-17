import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  showCastActionFetch,
  showDetailFetch,
  showFetch,
} from "../actions/ShowActions";
import { withRouter, WithRouterProps } from "../hoc/WithRouter";
import { actor } from "../models/Actors";
import { show } from "../models/show";
import {
  showActorLoadingSelector,
  showActorsSelector,
  showEntitiesSelector,
  showLoadingSelector,
  showsSelector,
} from "../selectors/ShowSelector";
import { state } from "../Store";
import ActorsRow from "./ActorsRow";
import { LinkWithQuery } from "./LinkWithQuery";
import Spinner from "./Spinner";

type ShowDetailsProps = {
  loading: boolean;
  actorsLoading: boolean;
  show: show;
  actors: actor[];
  fetchShows: (query: string) => void;
  fetchShow: (showId: number) => void;
  fetchShowCast: (showId: number) => void;
  prev?: string;
  next?: string;
} & WithRouterProps;

const ShowDetails: FC<ShowDetailsProps> = ({
  loading,
  actorsLoading,
  actors,
  show,
  fetchShows,
  fetchShow,
  fetchShowCast,
  params,
  search,
  prev,
  next,
}) => {
  useEffect(() => {
    const showId = +params.showId;
    fetchShow(showId);
    fetchShowCast(showId);
  }, [params.showId]);

  useEffect(() => {
    const query = search.get("q");
    if (!show && query) {
      fetchShows(query);
    }
  }, []);

  const handleClick = () => {
    fetchShow(+params.showId);
  };

  if (!show) {
    return <Spinner />;
  }
  return (
    <>
      {loading && <Spinner />}
      {show && (
        <div className=" bg-teal-300 rounded-md">
          <div className="flex justify-between">
            <div className="w-40 shrink-0  ">
              <img
                className="rounded-md"
                src={
                  show.image?.medium ||
                  "https://tse4.mm.bing.net/th?id=OIP.F00dCf4bXxX0J-qEEf4qIQHaD6&pid=Api&P=0&w=322&h=170"
                }
              />
            </div>
            <button
              onClick={handleClick}
              className=" self-start border border-indigo-500 bg-indigo-500 p-2 rounded-md hover:bg-indigo-700 text-white mr-3 "
            >
              Refresh
            </button>
          </div>
          <div className="ml-2">
            <div className="flex font-bold italic">
              # <h2>{show.name}</h2>
            </div>
            <p className="text-blue-700">{show.summary}</p>
            <a className="font-bold italic text-red-500" href={show.url}>
              Show Url
            </a>
          </div>
          <div className="flex justify-between p-3">
            {prev ? (
              <LinkWithQuery
                className="bg-indigo-500 p-2 rounded-md text-white"
                to={prev}
              >
                Prev Show
              </LinkWithQuery>
            ) : (
              <span></span>
            )}
            {next ? (
              <LinkWithQuery
                className="bg-indigo-500 p-2 rounded-md text-white "
                to={next}
              >
                Next Show
              </LinkWithQuery>
            ) : (
              <span></span>
            )}
          </div>
          <h2 className="text-2xl font-semibold">Actors:</h2>
          <div className="space-x-5 flex flex-wrap justify-evenly space-y-4">
            {actorsLoading && <Spinner />}
            {actors &&
              actors?.map((a) => (
                <div className="w-1/3">
                  <ActorsRow key={a.id && a.name} actor={a} />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

ShowDetails.defaultProps = {};

const mapStateToProps = (s: state, props: any) => {
  const showId = +props.params.showId;
  const shows = showsSelector(s);

  let prevShow, nextShow;

  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];
    if (show.id === showId) {
      if (i + 1 < shows.length) {
        nextShow = shows[i + 1];
      }
      if (i >= 1) {
        prevShow = shows[i - 1];
      }
      break;
    }
  }
  return {
    show: showEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s)[showId],
    actorsLoading: showActorLoadingSelector(s)[showId],
    actors: showActorsSelector(s)[showId],
    prev: prevShow && `/shows/${prevShow.id}`,
    next: nextShow && `/shows/${nextShow.id}`,
  };
};

const mapDispatchToProps = {
  fetchShow: showDetailFetch,
  fetchShowCast: showCastActionFetch,
  fetchShows: showFetch,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetails))
);
