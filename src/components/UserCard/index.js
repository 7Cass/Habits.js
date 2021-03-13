import { Card, Avatar } from "./styles";
import Button from "../Button";

import image from "../../assets/perfil_large.png";

import API from "../../services";
import { useState, useEffect } from "react";

import { useId } from "../../providers/group";
import { getOneUser } from "../../helper/users";
import { useChecked } from "../../providers/user";

//---------------------------------------------
const UserCard = () => {
  const [user, setUser] = useState([]);
  const { setGroupId } = useId();
  const { userId } = useChecked();

  const getData = (response) => {
    setUser(response.data);
    setGroupId(response.data.group);
  };

  useEffect(() => {
    API.get(getOneUser(userId)).then((res) => getData(res));
    // eslint-disable-next-line
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
