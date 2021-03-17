// react
import { useEffect } from "react";

// react router dom
import { Redirect } from "react-router";

// components
import Groups from "../../components/Groups";
import Menu from "../../components/Menu";

// styles
import { Container } from "./styles";

// provider
import { useChecked } from "../../providers/user";

//-----------------------------------------------
const GroupsPage = () => {
  const { isAuth, checkAuth } = useChecked();

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isAuth ? (
        <>
          <Menu />
          <Container>
            <h3>Grupos</h3>
            <Groups />
          </Container>
        </>
      ) : (
        <Redirect to={"/register"} />
      )}
    </>
  );
};

export default GroupsPage;
