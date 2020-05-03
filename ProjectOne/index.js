import React, { useState } from "react";
import { render } from "react-dom"; //{render} => React-DOM
import { SearchParams } from "./SearchParams";
import { useDrop } from "./useDrop";

const data = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "This is heading one"),
    React.createElement("h2", {}, "This is heading two"),
    React.createElement("h3", {}, "This is heading three"),
    React.createElement("h4", {}, "This is heading four"),
    React.createElement("h5", {}, "This is heading five"),
  ]);
};

const random = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h6", {}, props.name)
  );
};

const distruct = ({ name }) => {
  return React.createElement("div", {}, React.createElement("h6", {}, name));
};

/*
const app = () => {
  return (
    <div>
      <h1> Adopt Me ! is the heading of this page</h1>
      {React.createElement(data)}
      {React.createElement(random, { name: "this is a random name" })}
      <distruct name="name is just random"></distruct>
    </div>;
  )
};
*/

const app = () => {
  return (
    <div>
      <h1>adopt me</h1>
      <div>{React.createElement(SearchParams)}</div>
    </div>
  );
};

/*

backend functioning of above
const app = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),s
    React.createElement(data),
    React.createElement(random, { name: "this is a random name" }),
    React.createElement(distruct, { name: "name is just name" }),
  ]);
};
*/

const test = () => {
  return React.createElement("h1", {}, "only for testing purposes");
};

render(React.createElement(test), document.getElementById("root"));

/*ReactDOM.render*/ render(
  React.createElement(app), //<app />
  document.getElementById("root")
);
