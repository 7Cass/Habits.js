// API
import API from "../../services";

// helper
import { patchUpdateGoals } from "../../helper/goals";

// material ui
import { Checkbox } from "@material-ui/core";

import { useState } from "react";
import { useId } from "../../providers/group";

const CheckboxUpdateGoal = ({ goalId, goalAchieved }) => {
  const { group, setGroup } = useId();
  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const onUpdate = async () => {
    try {
      const newGroup = {
        ...group,
        goals: group.goals.map((goal) => {
          if (goal.id === goalId) {
            goal.achieved = !goalAchieved;
            return goal;
          }
          return goal;
        }),
      };

      await API.patch(
        patchUpdateGoals(goalId),
        { achieved: !goalAchieved },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setGroup(newGroup);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Checkbox color="primary" checked={goalAchieved} onChange={onUpdate} />
  );
};

export default CheckboxUpdateGoal;
