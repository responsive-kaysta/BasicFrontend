import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/styles.css";
import "./assets/css/fontawesome-all.css";

ReactDOM.render(<App />, document.getElementById("page-wrapper"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
