/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody(
  {  setPreBodyComponents }) {


setPreBodyComponents([
	<script
	  type="text/javascript"
    src="https://gist.github.com/MertcanAkardere/eb1d9768263535028d21ec9971fb932b.js"
  />,
]);

}
