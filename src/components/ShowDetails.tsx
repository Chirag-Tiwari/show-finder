import { FC, memo } from "react";
import { connect } from "react-redux";
import { withRouter, WithRouterProps } from "../hoc/WithRouter";
import { show } from "../models/show";
import { showEntitiesSelector } from "../selectors/ShowSelector";
import { state } from "../Store";

type ShowDetailsProps = {
  show: show;
} & WithRouterProps;

const ShowDetails: FC<ShowDetailsProps> = ({ show }) => {
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
  show: showEntitiesSelector(s)[+props.params.showId],
});

export default withRouter(connect(mapStateToProps)(memo(ShowDetails)));
