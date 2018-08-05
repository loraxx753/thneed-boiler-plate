import React from "react";
import * as readme from "../../README.md";
import ReactMarkdown from "react-markdown";

export default props => <ReactMarkdown source={readme.default} />;
