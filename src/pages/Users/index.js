// react
import { useEffect } from "react";

// react router dom
import { Redirect } from "react-router";

// components
import Users from "../../components/Users";
import Menu from "../../components/Menu";

// styles
import { Container, UsersContainer } from "./styles";

// provider
import { useChecked } from "../../providers/user";

//-----------------------------------------------
const UsersPage = () => {
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
            <h1>Usuários</h1>
            <UsersContainer>
              <Users />
            </UsersContainer>
          </Container>
        </>
      ) : (
        <Redirect to={"/register"} />
      )}
    </>
  );
};

export default UsersPage;
