// styles
import { Card, Name, Description } from "./styles";

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
