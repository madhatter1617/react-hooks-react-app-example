import React from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import App from "./components/App";
import "./index.css";

const NewHeader = <h1>now</h1>

ReactDOM.render(<App />, 
    document.getElementById("root"));

