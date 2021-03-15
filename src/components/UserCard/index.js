import { Card, Avatar, GroupCard } from "./styles";
import Button from "../Button";

import image from "../../assets/perfil_large.png";

import API from "../../services";
import { useState, useEffect } from "react";

import { useId } from "../../providers/group";
import { getOneUser } from "../../helper/users";
import { getOneGroup } from "../../helper/groups";
import { useChecked } from "../../providers/user";

//---------------------------------------------
const UserCard = () => {
  const [user, setUser] = useState([]);
  const [group, setGroup] = useState([]);
  const { setGroupId } = useId();
  const { userId } = useChecked();

  const getData = (response) => {
    setUser(response.data);
    setGroupId(response.data.group);
  };

  useEffect(() => {
    API.get(getOneUser(userId)).then((res) => getData(res));
    API.get(getOneGroup(user.group)).then((res) => setGroup(res.data));
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <Avatar src={image} />
      <h2>@{user.username}</h2>
      <h4>{user.email}</h4>
      <GroupCard>
        <h3>Seu Grupo</h3>
        <h2>{group.name}</h2>
        <Button size="small" styled="filled">
          <i class="fas fa-info-circle"></i>
          Detalhes
        </Button>
      </GroupCard>
      <Button styled="filled" size="large" children="Atualizar Dados" />
    </Card>
  );
};

export default UserCard;
