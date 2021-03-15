import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewGroup from "../pages/NewGroup";
import GroupsPage from "../pages/Groups";
import GroupPage from "../pages/Group";

// Import da flag do usuário
// import { isAuth, useChecked } from "../providers/user";

// página de testes dos forms
import TestForms from "../pages/TestForms";

//-----------------------------------------------
// *** QUANDO FOR ADICIONAR NOVAS ROTAS, PROCURE DEIXAR
// *** A TESTE POR ÚLTIMO ***
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/homepage">
        <HomePage />
      </Route>
      <exact path="/register">
        <Register />
      </exact>
      <Route exact path="/new-group">
        <NewGroup />
      </Route>
      <Route exact path="/groups">
        <GroupsPage />
      </Route>
      <Route>
        <GroupPage exact path="/group" />
      </Route>
      <Route exact path="/testforms">
        <TestForms />
      </Route>
    </Switch>
  );
};

export default Routes;
