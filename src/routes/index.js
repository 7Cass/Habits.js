import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
//-----------------------------------------------
export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;
