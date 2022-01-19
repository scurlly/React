import React from "react";
import ReactDOM from "react-dom";

const fname = "Scurlly";
const lname = "Rodrigues";
const num = "17";

ReactDOM.render(
  <div>
    <h1>My name is {fname + " " + lname}!</h1>
    <ul>
      <li>BTS</li>
      <li>Stray Kids</li>
      <li>Ateez</li>
      <li>Itzy</li>
    </ul>
    <p>My favourite number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
