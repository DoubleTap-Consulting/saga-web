import React from "react";
import { Route, Redirect } from "react-router";
import { getAuth } from "../utils/api";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect // eslint-disable-line
          to={{
            pathname: "/login",
            state: { from: props.location } // eslint-disable-line react/prop-types
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
