import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";

//-----------------------------------------------
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route>
        <Login exact path="/login" />
      </Route>
    </Switch>
  );
};

export default Routes;
