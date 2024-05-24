/** Key features of Parcel***
 * Hot module replacement (HMR)
 * file watcher algorithm - C++
 * bundling
 * minify
 * cleaning our Code
 * manages dev and production build
 * superfast build algorithm
 * image optimization
 * caching while development
 * compression
 * compatible with older version of browser
 * HTTPS on dev
 * port number
 * consistent hashing algorithm
 * zero config
 */

import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading = React.createElement("h1", {}, "Namaste Everyone");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

*/
const name = "Kanishka Ray";
const Heading = () => {
  //we can write any valid javascript inside {}
  return <h1>Namaste, {name}</h1>;
};

const Greetings = () => {
  return <p>How are you doing ?</p>;
};

const App = () => (
  <>
    <Heading />
    <Greetings />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
