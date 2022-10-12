import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const people = ["Alex", "Ali", "Anna"];
// const [first, second, third] = ["Alex", "Ali", "Anna"];
// const [first] = ["Alex", "Ali", "Anna"];
const [, , third] = ["Alex", "Ali", "Anna"];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name={third} />
  </React.StrictMode>
);
