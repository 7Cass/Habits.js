import API from "../../services";
import { useEffect, useState } from "react";
import { GroupContent, CardGroup, userCard, generalCard } from "./style";
import ModalActivity from "../ModalActivity";

//helpers =>

import { useChecked } from "../../providers/user";
import { useId } from "../../providers/group";
import { getOneUser } from "../../helper/users";
import { getOneGroup } from "../../helper/groups";
import { deleteActivity } from "../../helper/activities";

//==============================================
const Group = () => {
  const { group, setGroup } = useId();
  const { userId } = useChecked();

  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const getGroup = async (data) => {
    try {
      const takeUser = await API.get(getOneUser(userId), data);
      console.log(takeUser.data);

      const takeGroup = await API.get(getOneGroup(takeUser.data.group), data);
      console.log(takeGroup.data);

      setGroup(takeGroup.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deteleActivity = async (actId) => {
    try {
      // eslint-disable-next-line
      const delActivity = await API.delete(deleteActivity(actId), {
        headers: { Authorization: `Bearer ${token}` },
      });
      getGroup();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    await getGroup();
  }, []);

  return (
    <GroupContent>
      <CardGroup>
        <h1>{group.name}</h1>
        <h4>{group.description}</h4>
        <generalCard>
          <h2>Metas: </h2>
          <button>Nova Meta</button>
          {group.goals !== undefined
            ? group.goals.map((goal) => <h3>{goal.title}</h3>)
            : null}
        </generalCard>
        <generalCard>
          <h2>Atividades</h2>
          <ModalActivity getGroup={getGroup} />
          {group.activities !== undefined
            ? group.activities.map((activity) => (
                <div>
                  <h3>{activity.title}</h3>
                  <button onClick={() => deteleActivity(activity.id)}>
                    Delete
                  </button>
                </div>
              ))
            : null}
        </generalCard>
        <userCard>
          <h2>Usuarios:</h2>
          {group.users !== undefined
            ? group.users.map((user) => <h3>{user.username}</h3>)
            : null}
        </userCard>
      </CardGroup>
    </GroupContent>
  );
};

export default Group;
