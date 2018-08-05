import React from "react";
import styled from "react-emotion";
import { color } from "styled-system";

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

const primitives = { ...customPrimitives };

export default customPrimitives;
