import React from "react";
import { Router, Route, Navigate, Debug } from "../Primitives/index";

import { dashToPascal } from "../Primitives";
import Loadable from "react-loadable";
import Home from "./Home";

export const Loading = props => <p>Loading...</p>;

const Template = props => {
  return (
    <React.Fragment>
      <Debug>{props}</Debug>
    </React.Fragment>
  );
};

export default class extends React.Component {
  state = {};

  componentDidMount = () => {
    this.setState({
      template: Template
    });
  };

  render = () => (
    <Router>
      <React.Fragment>
        <React.Fragment>
          <Route exact={true} path={"/"} component={Home} />
          {/*<Route exact={true} path={"/"} component={Composites} />*/}

          {/*<Route
          exact={false}
          path={"/:atomicSelection/:dashedName"}
          component={ComponentRenderer}
        />*/}
        </React.Fragment>
      </React.Fragment>
    </Router>
  );
}
