import { Card, Avatar, GroupCard } from "./styles";
import ModalUpdateUser from "../ModalUpdateUser";
import Button from "../Button";

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
      <GroupCard>
        <h3>Seu Grupo</h3>
        <h2>{group.name}</h2>
        <Button size="small" styled="filled">
          <i class="fas fa-info-circle"></i>
          Detalhes
        </Button>
      </GroupCard>
      <ModalUpdateUser />
    </Card>
  );
};

export default UserCard;
