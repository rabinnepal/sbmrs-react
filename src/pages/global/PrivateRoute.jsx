import React from "react";
import { Route, redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return redirect("/login");
        }
      }}
    />
  );
};

export default PrivateRoute;
