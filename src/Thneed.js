import React from "react";
import { Router, Route, Navigate, Debug } from "./Primitives/index";

import { dashToPascal } from "./Primitives";
import Loadable from "react-loadable";
import Composites from "./Composites";

export const Loading = props => <p>"Loading..."</p>;

export default class extends React.Component {
  state = {
    composites: Loading
  };

  componentDidMount = () => {
    this.setState({
      composites: Composites
    });
  };

  render = () => (
    <Router>
      <React.Fragment>
        <React.Fragment>
          <Route exact={true} path={"/"} component={this.state.composites} />
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
