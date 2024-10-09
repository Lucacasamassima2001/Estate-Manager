/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./Button";
export const LinkButton = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
};
