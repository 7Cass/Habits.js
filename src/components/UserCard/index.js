import { Card, Avatar, GroupCard } from "./styles";
import ModalUpdateUser from "../ModalUpdateUser";
import ModalUserGroup from "../ModalUserGroup";
import ModalCreateGroup from "../ModalCreateGroup";

import image from "../../assets/perfil_large.png";

import { useChecked } from "../../providers/user";

//---------------------------------------------
const UserCard = () => {
  const { user, group } = useChecked();

  return (
    <Card>
      <Avatar src={image} />
      <h2>@{user.username}</h2>
      <h4>{user.email}</h4>
      {group ? (
        <GroupCard>
          <h3>Seu Grupo</h3>
          <h2>{group.name}</h2>
          <ModalUserGroup group={group} />
        </GroupCard>
      ) : (
        <GroupCard>
          <ModalCreateGroup />
        </GroupCard>
      )}
      <ModalUpdateUser />
    </Card>
  );
};

export default UserCard;
