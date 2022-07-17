import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export const LinkWithQuery: FC<any> = ({ Children, to, ...props }) => {
  const { search } = useLocation();

  return (
    <Link to={to + search} {...props}>
      {Children}
    </Link>
  );
};
