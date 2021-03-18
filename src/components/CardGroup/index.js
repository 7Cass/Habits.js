// styles
import { Card, Category, Name, Description } from "./styles";

// API
import API from "../../services";

// helper
import { postSubscribeGroup } from "../../helper/groups";
import { getOneGroup } from "../../helper/groups";

// react router dom
import { useHistory } from "react-router-dom";

// provider
import { useChecked } from "../../providers/user";

// components
import Button from "../Button";

//----------------------------------
const CardGroup = ({ group }) => {
  const { token, setGroup, isChecked } = useChecked();
  const history = useHistory();

  const onSubmit = async () => {
    const data = {
      name: group.name,
      description: group.description,
      category: group.category,
    };

    try {
      await API.post(postSubscribeGroup(group.id), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const takeUserGroup = await API.get(getOneGroup(group.id));
      setGroup(takeUserGroup.data);

      isChecked
        ? localStorage.setItem("userGroup", JSON.stringify(takeUserGroup.data))
        : sessionStorage.setItem(
            "userGroup",
            JSON.stringify(takeUserGroup.data)
          );
      history.push("/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <Name>{group.name}</Name>
      <Description>{group.description}</Description>
      <Category>{group.category}</Category>
      <Button size="small" styled="outlined-light" onClick={onSubmit}>
        Entrar
      </Button>
    </Card>
  );
};

export default CardGroup;
