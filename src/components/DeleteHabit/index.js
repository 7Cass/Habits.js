// react
import { useState } from "react";

// API
import API from "../../services";

// helper
import { deleteHabit } from "../../helper/habits";

// global state
import { useChecked } from "../../providers/user";

// material ui
import { Box, Typography, IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
//--------------------------------------------------

//--------------------------------------------------
const DeleteHabit = ({ habitID }) => {
  //state para teste
  const [habit, setHabit] = useState(0);
  const { isChecked } = useChecked();
  const [token] = useState(() => {
    const Token = isChecked
      ? localStorage.getItem("token") || ""
      : sessionStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const onDelete = async () => {
    // const data = {};
    try {
      await API.delete(deleteHabit(habit));
      //    await API.delete(deleteHabit(habit), data, {
      //     headers: { Authorization: `Bearer ${token}` },
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <input value={habit} onChange={(e) => setHabit(e.target.value)} />
      <Typography gutterBottom>Delete Habit</Typography>
      <IconButton aria-label="delete" onClick={onDelete}>
        <DeleteForeverIcon />
      </IconButton>
    </Box>
  );
};

export default DeleteHabit;
