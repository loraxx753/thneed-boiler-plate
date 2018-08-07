import React from "react";
import { Debug } from "../Primitives";

export default ({ match, ...props }) => {
  let { params } = match || {};
  return (
    <React.Fragment>
      <Debug>{match}</Debug>
    </React.Fragment>
  );
};
