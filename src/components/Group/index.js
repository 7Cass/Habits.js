import API from "../../services";
import { useEffect, useState } from "react";
import { GroupContent, CardGroup, userCard, generalCard } from "./style";
import ModalActivity from "../ModalActivity";
import ModalUpdateActivity from "../ModalUpdateActivity";
import ModalCreateGoal from "../ModalCreateGoal";

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

      const takeGroup = await API.get(getOneGroup(takeUser.data.group), data);

      setGroup(takeGroup.data);
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (actId) => {
    try {
      await API.delete(deleteActivity(actId), {
        headers: { Authorization: `Bearer ${token}` },
      });

      getGroup();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGroup();
    // eslint-disable-next-line
  }, []);

  return (
    <GroupContent>
      <CardGroup>
        <h1>{group.name}</h1>
        <h4>{group.description}</h4>
        <generalCard>
          <h2>Metas: </h2>
          <ModalCreateGoal getGroup={getGroup} />
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
                  <button onClick={() => onDelete(activity.id)}>Delete</button>
                  <ModalUpdateActivity
                    getGroup={getGroup}
                    actId={activity.id}
                  />
                </div>
              ))
            : null}
        </generalCard>
        <userCard>
          <h2>Usuários:</h2>
          {group.users !== undefined
            ? group.users.map((user) => <h3>{user.username}</h3>)
            : null}
        </userCard>
      </CardGroup>
    </GroupContent>
  );
};

export default Group;
