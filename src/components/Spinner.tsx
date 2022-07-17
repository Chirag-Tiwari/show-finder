import { FC } from "react";

type SpinnerProps = {};

const Spinner: FC<SpinnerProps> = () => {
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
};

Spinner.defaultProps = {};

export default Spinner;
