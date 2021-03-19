// react router dom
import { Switch, Route } from "react-router-dom";

// pages
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import GroupsPage from "../pages/Groups";
import GroupPage from "../pages/Group";
import UsersPage from "../pages/Users";
import Developers from "../pages/Developers";
import NotFound from "../pages/NotFound";

// framer motion
import { AnimatePresence } from "framer-motion";

// -----------------------------------------------
const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/groups">
          <GroupsPage />
        </Route>
        <Route exact path="/group">
          <GroupPage />
        </Route>
        <Route exact path="/users">
          <UsersPage />
        </Route>
        <Route exact path="/developers">
          <Developers />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
