// react
import { useState } from "react";

// API
import API from "../../services";

// helper
import { deleteHabit } from "../../helper/habits";

// global state
import { useChecked } from "../../providers/user";

// material ui
import { Box, Typography } from "@material-ui/core";

// components
import Button from "../Button";
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
    try {
      await API.delete(deleteHabit(habit), {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <input value={habit} onChange={(e) => setHabit(e.target.value)} />
      <Typography gutterBottom>Delete Habit</Typography>
      <Button styled="outlined" size="small" onClick={() => onDelete()}>
        Delete
      </Button>
    </Box>
  );
};

export default DeleteHabit;
