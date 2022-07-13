import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { showDetailFetch } from "../actions/ShowActions";
import { withRouter, WithRouterProps } from "../hoc/WithRouter";
import { show } from "../models/show";
import { showDetailEntitiesSelector } from "../selectors/ShowSelector";
import { state } from "../Store";

type ShowDetailsProps = {
  show: show;
  fetchShow: (showId: number) => void;
} & WithRouterProps;

const ShowDetails: FC<ShowDetailsProps> = ({ show, fetchShow, params }) => {
  useEffect(() => {
    fetchShow(+params.showId);
  }, []);
  if (!show) {
    return (
      <div className="flex justify-center items-center mt-4">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className=" bg-teal-300 rounded-md">
      {" "}
      <div className="w-40 shrink-0">
        <img
          className="rounded-md"
          src={
            show.image?.medium ||
            "https://tse4.mm.bing.net/th?id=OIP.F00dCf4bXxX0J-qEEf4qIQHaD6&pid=Api&P=0&w=322&h=170"
          }
        />
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
    </div>
  );
};

ShowDetails.defaultProps = {};

const mapStateToProps = (s: state, props: any) => ({
  show: showDetailEntitiesSelector(s)[+props.params.showId],
});

const mapDispatchToProps = {
  fetchShow: showDetailFetch,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetails))
);
