import { Card, Avatar, GroupCard } from "./styles";
import ModalUpdateUser from "../ModalUpdateUser";
import ModalUserGroup from "../ModalUserGroup";
import ModalCreateGroup from "../ModalCreateGroup";
// import Button from "../Button";

import image from "../../assets/perfil_large.png";

import { useId } from "../../providers/group";
import { useChecked } from "../../providers/user";

//---------------------------------------------
const UserCard = () => {
  const { group } = useId();
  const { user } = useChecked();

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
      <ModalUpdateUser />
    </Card>
  );
};

export default UserCard;
