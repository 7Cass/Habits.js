import { Redirect } from "react-router";
import Groups from "../../components/Groups";

import { useChecked } from "../../providers/user";

const GroupsPage = () => {
  const { isAuth, checkAuth } = useChecked();

  checkAuth();

  return <>{isAuth ? <Groups /> : <Redirect to={"/register"} />}</>;
};

export default GroupsPage;
