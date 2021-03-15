import Menu from "../../components/Menu";
import HabitsCard from "../../components/HabitsCard";
import UserCard from "../../components/UserCard";

import { Container } from "./styles";

const HomePage = () => {
  return (
    <>
      <Menu />
      <Container>
        <HabitsCard />
        <UserCard />
      </Container>
    </>
  );
};

export default HomePage;
