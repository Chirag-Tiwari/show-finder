import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { show } from "../models/show";

type ShowProps = { show: show };

const Show: FC<ShowProps> = ({ show }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shows/" + show.id);
  };
  return (
    <div
      onClick={handleClick}
      className="text-lg cursor-pointer text-gray-800 font-semibold flex bg-teal-300 rounded-md items-stretch"
    >
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
      </div>
    </div>
  );
};

Show.defaultProps = {};

export default Show;
