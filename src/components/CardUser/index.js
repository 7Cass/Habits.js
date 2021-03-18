// styles
import { Card, Category, Name, Description } from "./styles";

// components
import ModalGroupDetail from "../ModalGroupDetail";

//----------------------------------
const CardGroup = ({ user }) => {
  return (
    <Card>
      <Name>{user.username}</Name>
      <Description>{user.email}</Description>
    </Card>
  );
};

export default CardGroup;
