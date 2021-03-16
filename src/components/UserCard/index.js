import { Card, Avatar, GroupCard } from "./styles";
import Button from "../Button";

import image from "../../assets/perfil_large.png";

import ModalCreateGroup from "../ModalCreateGroup";
import ModalUserGroup from "../ModalUserGroup";

import API from "../../services";
import { useState, useEffect } from "react";

import { getOneGroup } from "../../helper/groups";
import { useChecked } from "../../providers/user";

//---------------------------------------------
const UserCard = () => {
  const { user } = useChecked();

  const [group, setGroup] = useState([]);

  const getGroups = async () => {
    try {
      const takeGroup = await API.get(getOneGroup(user.group));
      setGroup(takeGroup.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Card>
      <Avatar src={image} />
      <h2>@{user.username}</h2>
      <h4>{user.email}</h4>
      {user.group !== null ? (
        <GroupCard>
          <h3>Seu Grupo</h3>
          <h2>{group.name}</h2>
          <ModalUserGroup />
        </GroupCard>
      ) : (
        <GroupCard>
          <ModalCreateGroup />
        </GroupCard>
      )}
      <Button styled="filled" size="large" children="Atualizar Dados" />
    </Card>
  );
};

export default UserCard;
