import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewGroup from "../pages/NewGroup";

// página de testes dos forms
import TestForms from "../pages/TestForms";

//-----------------------------------------------
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/new-group">
        <NewGroup />
      </Route>
      <Route exact path="/testforms">
        <TestForms />
      </Route>
    </Switch>
  );
};

export default Routes;
