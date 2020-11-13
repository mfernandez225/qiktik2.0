import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById("root")
);

serviceWorker.unregister();
