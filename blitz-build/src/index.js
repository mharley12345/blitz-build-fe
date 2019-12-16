import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./components/auth0/auth0-spa";
import config from "./components/auth0/auth0config.json";
import history from "./utils/auth/history";

import "./utils/imports.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
