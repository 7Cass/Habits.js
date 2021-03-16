import Menu from "../../components/Menu";
import HabitsCard from "../../components/HabitsCard";
import UserCard from "../../components/UserCard";

import { Container } from "./styles";

import { useChecked } from "../../providers/user";
import { Redirect } from "react-router";

const HomePage = () => {
  const { isAuth, checkAuth } = useChecked();

  checkAuth();

  return (
    <>
      {isAuth ? (
        <>
          <Menu />
          <Container>
            <HabitsCard />
            <UserCard />
          </Container>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default HomePage;
