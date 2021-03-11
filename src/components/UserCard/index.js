import { Card, Avatar } from "./styles";
import Button from "../Button";

import image from "../../assets/perfil.jpg";

import API from "../../services";
import { useState, useEffect } from "react";

const UserCard = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    API.get("/users/1/").then((res) => setUser(res.data));
  }, []);
  return (
    <Card>
      <h2>Habits</h2>
      <Avatar src={image} />
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      <Button styled="filled" size="large" children="Update Informations" />
    </Card>
  );
};

export default UserCard;
