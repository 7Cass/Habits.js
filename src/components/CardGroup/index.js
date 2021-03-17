// styles
import { Card, Category, Name, Description } from "./styles";

// components
import ModalGroupDetail from "../ModalGroupDetail";

//----------------------------------
const CardGroup = ({ group }) => {
  return (
    <Card>
      <Name>{group.name}</Name>
      <Description>{group.description}</Description>
      <Category>{group.category}</Category>
      <ModalGroupDetail group={group} />
    </Card>
  );
};

export default CardGroup;
