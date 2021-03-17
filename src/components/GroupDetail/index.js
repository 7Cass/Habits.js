import API from "../../services";
import { useEffect, useState } from "react";
import {
  GroupContent,
  TitleContent,
  CardGroup,
  UserCard,
  ActivitiesCard,
  ActivityCard,
  ActivityAdd,
  CategoryBox,
  ButtonsContent,
  Goals,
  GoalsAdd,
  GoalCard,
  Users,
  UsersContent,
} from "./style";
import ModalActivity from "../ModalActivity";
import ModalUpdateActivity from "../ModalUpdateActivity";
import ModalCreateGoal from "../ModalCreateGoal";
import ModalUpdateTitleGroup from "../ModalUpdateTitleGroup";

import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import GroupIcon from "@material-ui/icons/Group";
import CloseIcon from "@material-ui/icons/Close";

//helpers =>
import { useChecked } from "../../providers/user";
import { useId } from "../../providers/group";
import { useAcitivityButtons } from "../../styles/makeStyles";
import { formatDate } from "../../helper/activities";

import { getOneGroup } from "../../helper/groups";
import { deleteActivity } from "../../helper/activities";
import { deleteGoals } from "../../helper/goals";
import CheckboxUpdateGoal from "../CheckboxUpdateGoal";

//==============================================
const GroupDetail = (props) => {
  const { group, setGroup } = useId();
  const classes = useAcitivityButtons();
  const { user } = useChecked();

  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const getGroup = async () => {
    try {
      const takeGroup = await API.get(getOneGroup(user.group));
      setGroup(takeGroup.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteAct = async (actId) => {
    try {
      await API.delete(deleteActivity(actId), {
        headers: { Authorization: `Bearer ${token}` },
      });

      getGroup();
    } catch (error) {
      console.log(error);
    }
  };
  const onDeleteGoal = async (goalId) => {
    try {
      await API.delete(deleteGoals(goalId), {
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
        <CloseIcon onClick={() => props.handleClose()}>Close</CloseIcon>
        <TitleContent>
          <h1>{props.group.name}</h1>
        </TitleContent>
        <h4>{props.group.description}</h4>
        <CategoryBox>{props.group.category}</CategoryBox>

        <ActivitiesCard>
          <h2>Atividades</h2>
          {/* <ActivityAdd>
            <ModalActivity getGroup={getGroup} />
          </ActivityAdd> */}
          {props.group.activities !== undefined
            ? props.group.activities.map((activity, index) => (
                <ActivityCard key={index}>
                  <h3>{activity.title}</h3>
                  {/* <ButtonsContent>
                    <h4>{formatDate(activity.realization_time)}</h4>
                    <ModalUpdateActivity
                      getGroup={getGroup}
                      actId={activity.id}
                    />
                    <HighlightOffOutlinedIcon
                      onClick={() => onDeleteAct(activity.id)}
                      className={classes.buttonStyle}
                    >
                      Delete
                    </HighlightOffOutlinedIcon>
                  </ButtonsContent> */}
                </ActivityCard>
              ))
            : null}
        </ActivitiesCard>

        <Goals>
          <h2>Metas</h2>
          {/* <GoalsAdd>
            <ModalCreateGoal getGroup={getGroup} />
          </GoalsAdd> */}
          {props.group.goals !== undefined
            ? props.group.goals.map((goal, index) => (
                <GoalCard key={index}>
                  <h3>{goal.title}</h3>
                  {/* <ButtonsContent className="goal-container">
                    <p>{goal.difficulty}</p>
                    <CheckboxUpdateGoal
                      goalId={goal.id}
                      goalAchieved={goal.achieved}
                    />
                    <HighlightOffOutlinedIcon
                      onClick={() => onDeleteGoal(goal.id)}
                      className={classes.buttonStyle}
                    />
                  </ButtonsContent> */}
                </GoalCard>
              ))
            : null}
        </Goals>

        <UserCard>
          <Users>
            <h2>Usuários</h2>
            <GroupIcon fontSize="large" />
          </Users>
          <UsersContent>
            {props.group.users !== undefined
              ? props.group.users.map((user, index) => (
                  <h3 key={index}>{user.username}</h3>
                ))
              : null}
          </UsersContent>
        </UserCard>
      </CardGroup>
    </GroupContent>
  );
};

export default GroupDetail;
