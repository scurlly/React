import React from "react";
import ReactDOM from "react-dom";

const fname = "Scurlly";
const lname = "Rodrigues";
const date = new Date();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
