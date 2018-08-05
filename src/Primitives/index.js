import React from "react";
import styled from "react-emotion";
import { color } from "styled-system";
import {
  BrowserRouter as PrimitiveRouter,
  Route as PrimitiveRoute,
  Link as PrimitiveNavigate
} from "react-router-dom";

import PrimitiveDebug from "./Debug";

const customPrimitives = {
  Text: styled("p")`
  ${color}
`,
  Image: styled("img"),
  Composite: styled("div")`
  ${color}
  display: block;
  margin: 0 auto;
  max-width: 500px;
`,
  Container: styled("div")``
};

export const Text = customPrimitives.Text || styled("p");
export const Image = customPrimitives.Image || styled("img");
export const Composite = customPrimitives.Composite || styled("div");
export const Container = customPrimitives.Container || styled("div");
export const Router = customPrimitives.Router || PrimitiveRouter;
export const Route = customPrimitives.Route || PrimitiveRoute;
export const Navigate = customPrimitives.Navigate || PrimitiveNavigate;
export const Debug = customPrimitives.Debug || PrimitiveDebug;

const primitives = { ...customPrimitives };

export default customPrimitives;
