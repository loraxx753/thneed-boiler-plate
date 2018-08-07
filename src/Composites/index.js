import React from "react";
import { Router, Route, Navigate, Debug } from "../Primitives/index";

import { dashToPascal } from "../Primitives";
import Loadable from "react-loadable";

const HOCRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => <Component {...props} />} />;
};

// const ComponentRenderer = props => {
//   let { atomicSelection, dashedName } = props.match.params;
//   const AtomicSelection = dashToPascal(atomicSelection);
//   const DashedName = dashToPascal(dashedName);
//   const ComponentLoader = Loadable({
//     loader: () => import(`../${AtomicSelection}/${DashedName}`),
//     render: ({ Component, loading, ownProps }) => {
//       if (!Component) return "loadiong";
//       return (
//         <React.Fragment>
//           <Debug>{`../${AtomicSelection}/${DashedName}`}</Debug>
//         </React.Fragment>
//       );
//     },

//     loading: () => <div>Loading...</div>
//   });

//   return (
//     <React.Fragment>
//       <ComponentLoader />
//     </React.Fragment>
//   );
// };

export default props => {
  return (
    <Router>
      <React.Fragment>
        <Route
          exact={true}
          path={"/"}
          render={props => <Debug>{props}</Debug>}
        />
        {/*<Route exact={true} path={"/"} component={ComponentLoader} />*/}

        {/*<Route
          exact={false}
          path={"/:atomicSelection/:dashedName"}
          component={ComponentRenderer}
        />*/}
      </React.Fragment>
    </Router>
  );
};
