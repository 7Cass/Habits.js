import "../../styles/globalStyle.css";

import Menu from "../../components/Menu";
import Button from "../../components/Button";

import { useState, useEffect } from "react";

import API from "../../services";

const HomePage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API.get("/users/4/").then((res) => setUser(res.data));
  }, []);

  console.log(user);

  return (
    <>
      <Menu />
    </>
  );
};

export default HomePage;
