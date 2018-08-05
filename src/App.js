import React from "react";

import Composites from "./Composites";
// import routes from "./routes";
import { Router, Route, Navigate, Debug } from "./Primitives/index";
import routes from "./routes";

export default props => {
  return (
    <Router>
      <React.Fragment>
        {Object.keys(routes).map((key, i) => (
          <Route
            key={i}
            exact={routes[key].exact || false}
            path={routes[key].path}
            component={routes[key].Component}
          />
        ))}
      </React.Fragment>
    </Router>
  );
};

//   <hr />

//         {
//   Object.keys(routes).map(key => (
// <Route
//   exact={routes[key].exact || false}
//   path={routes[key].path}
//   component={routes[key].Component}
// />
//   ))
// }
