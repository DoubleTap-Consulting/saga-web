import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
// import our app components here
import configureStore from "./store/configureStore";
import asyncLoader from "./components/asyncComponentLoader";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "./styles/main.css";
const history = createBrowserHistory();
const store = configureStore();
// Create asyncLoader imports here
const asyncApp = asyncLoader(() => require("./containers/app/app"));

const renderApp = () =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={asyncApp} />
      </Router>
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./containers/app/app", renderApp);
}
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
