// API
import API from "../../services";

// helper
import { deleteHabit } from "../../helper/habits";
import { getPersonalHabit } from "../../helper/habits";

// global state
import { useChecked } from "../../providers/user";

// material ui
import { Box } from "@material-ui/core";
import { SliderStyles } from "../../styles/makeStyles";
//--------------------------------------------------

//--------------------------------------------------
const DeleteHabit = ({ habitID }) => {
  const classes = SliderStyles();
  const { token, setHabits } = useChecked();

  const onDelete = async () => {
    try {
      await API.delete(deleteHabit(habitID), {
        headers: { Authorization: `Bearer ${token}` },
      });

      const takeHabits = await API.get(getPersonalHabit(), {
        headers: { Authorization: `Bearer ${token}` },
      });
      takeHabits.data.sort((a, b) => a.id - b.id);
      setHabits(takeHabits.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <button className={classes.removeButton} onClick={onDelete}>
        <i class="fas fa-trash-alt" />
        Remover
      </button>
    </Box>
  );
};

export default DeleteHabit;
