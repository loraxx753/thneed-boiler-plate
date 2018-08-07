import React from "react";
import styled from "react-emotion";
import { color } from "styled-system";
import {
  BrowserRouter as PrimitiveRouter,
  Route as PrimitiveRoute,
  Link as PrimitiveNavigate
} from "react-router-dom";

import { default as PrimitiveDebug } from "./Debug";

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

export const realWord = camelCasedKey =>
  camelCasedKey[0].toUpperCase() +
  camelCasedKey.substring(1).replace(/([A-Z])+/g, " $1");

export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const dashToPascalCase = string => capitalize(dashToCamelCase(string));

export const dashToCamelCase = string =>
  string.replace(/-([a-z])/g, c => c[1].toUpperCase());

export const ObjectMap = props =>
  Object.keys(props.input).map((key, i) => (
    <React.Fragment key={i}>
      {props.children(props.input[key], key, i)}
    </React.Fragment>
  ));

export const getPrimes = max => {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
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
