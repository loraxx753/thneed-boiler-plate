import React from "react";

import { Composite as BaseComposite } from "../Primitives/index";

export default props => (
  <BaseComposite>
    <props.Component />
  </BaseComposite>
);
