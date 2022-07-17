import { FC } from "react";
import { actor } from "../models/Actors";

type ActorsRowProps = { actor: actor };

const ActorsRow: FC<ActorsRowProps> = ({ actor }) => {
  return (
    <div className="  w-40 shrink-0 ">
      <img
        src={
          actor?.image?.medium ||
          "https://tse4.mm.bing.net/th?id=OIP.F00dCf4bXxX0J-qEEf4qIQHaD6&pid=Api&P=0&w=322&h=170"
        }
      />
      <div>
        <h1 className="text-2xl font-bold text-blue-800 ">{actor.name}</h1>
        <h3 className="text-lg font-semibold italic text-blue-800">
          {actor.country?.name}
        </h3>
        <h3 className="text-lg font-semibold italic text-blue-800">
          {actor.gender}
        </h3>
      </div>
    </div>
  );
};

ActorsRow.defaultProps = {};

export default ActorsRow;
