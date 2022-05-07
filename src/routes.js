import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import PageNotFound from "./components/PageNotFound";
import HOME from "./components/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <HOME />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
