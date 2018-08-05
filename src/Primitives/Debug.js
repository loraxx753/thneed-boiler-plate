import React from "react";

export default props => (
  <pre>
    <code>{JSON.stringify(props.children, null, 2)}</code>
  </pre>
);
