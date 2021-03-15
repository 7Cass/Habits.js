import Menu from "../../components/Menu";
// import UserCard from "../../components/UserCard";
// import HabitsCard from "../../components/HabitsCard";

import Button from "../../components/Button";

const HomePage = () => {
  return (
    <div style={{ background: "blue" }}>
      <Menu />
      <Button styled="filled" size="small">
        Button
      </Button>
      <Button styled="outlined" size="small">
        Button
      </Button>
      <Button styled="filled-light" size="small">
        Button
      </Button>
      <Button styled="outlined-light" size="small">
        Button
      </Button>
    </div>
  );
};

export default HomePage;
