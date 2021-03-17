import Menu from "../../components/Menu";
import HabitsCard from "../../components/HabitsCard";
import UserCard from "../../components/UserCard";
import Footer from "../../components/Footer";

import { Container, InnerContainer, DevelopedBy } from "./styles";

import { useChecked } from "../../providers/user";
import { Redirect } from "react-router";

import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const { isAuth, checkAuth } = useChecked();

  checkAuth();

  return (
    <>
      {isAuth ? (
        <>
          <Menu />
          <Container>
            <InnerContainer>
              <HabitsCard />
              <UserCard />
            </InnerContainer>
            <DevelopedBy>
              Desenvolvido por
              <span onClick={() => history("/developers")}> Squad 1</span>
            </DevelopedBy>
          </Container>
          <Footer />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default HomePage;
