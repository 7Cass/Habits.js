import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route>
        <Login exact path="/login" />
      </Route>
    </Switch>
  );
};

export default Routes;
