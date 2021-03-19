// API
import API from "../../services";

// helper
import { patchUpdateGoals } from "../../helper/goals";

// material ui
import { Checkbox } from "@material-ui/core";

// providers
import { useChecked } from "../../providers/user";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const CheckboxUpdateGoal = ({ goalId, goalAchieved }) => {
  const { token, group, setGroup } = useChecked();

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

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55a1e3",
      },
      text: {
        primary: "#55a1e3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Checkbox
        color="primary"
        checked={goalAchieved}
        onChange={onUpdate}
        style={{ color: "#55a1e3" }}
      />
    </ThemeProvider>
  );
};

export default CheckboxUpdateGoal;
