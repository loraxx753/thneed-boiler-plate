import Example from "./Composites/Example";
import About from "./Composites/About";
import Docs from "./Composites/Docs";

const routes = {
  home: {
    path: "/",
    exact: true,
    Component: Example
  },
  about: {
    path: "/about",
    exact: false,
    Component: About
  },
  docs: {
    path: "/docs",
    exact: false,
    Component: Docs
  }
};

export default routes;
