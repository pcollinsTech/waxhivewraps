/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import ShopState from "./src/context/shop/ShopState";
export const wrapRootElement = ({ element }) => <ShopState>{element}</ShopState>;
