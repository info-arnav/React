import React from "react";
import { render } from "react-dom"; //{render} => React-DOM

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

const app = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(data),
    React.createElement(random, { name: "this is a random name" }),
    React.createElement(distruct, { name: "name is just name" }),
  ]);
};

const test = () => {
  return React.createElement("h1", {}, "only for testing purposes");
};

render(React.createElement(test), document.getElementById("root"));

/*ReactDOM.render*/ render(
  React.createElement(app),
  document.getElementById("root")
);
