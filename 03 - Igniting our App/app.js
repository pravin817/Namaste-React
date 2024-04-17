/**
 * Parcel - is a module bundler
 * HMR - Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING - Combining all the files into one file
 * MINIFICATION - Removing all the white spaces and comments
 * Dev and Production build
 * Super Fast build Algorithm
 * Cleaning the app
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older browsers
 * Add polyfills
 * Build the app in HTTPS development
 * PORT Number
 * Consistent Hash Algorithm
 * Zero Configuration
 */

import React from "react";
import ReactDOM from "react-dom/client";

//  Create the heading
const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1"
);

//  Create the heading
const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading 2"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

console.log(heading1); //Objects
// get the access to the root

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing the react element into the root
root.render(container);
