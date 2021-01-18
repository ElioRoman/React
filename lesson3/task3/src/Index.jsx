import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Comment from "./Comment";

const rootElem = document.querySelector("#root");

const user = {name: "Tom", avatarUrl: "https://avatars3.githubusercontent.com/u10001",
};

ReactDOM.render(<Comment author={user} text="Good job" date={new Date()} />,
  rootElem
);