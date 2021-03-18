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
import { SliderStyles } from "../../styles/makeStyles";

// components
import Button from "../Button";
//--------------------------------------------------

//--------------------------------------------------
const DeleteHabit = ({ habitID }) => {
  const classes = SliderStyles();
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
      setHabit(habitID);
    } catch (error) {
      console.log(error);
    }
  };

  const trigger = () => {
    onDelete();
  };

  //<input value={habit} onChange={(e) => setHabit(e.target.value)} />

  return (
    <Box>
      <button className={classes.removeButton} onClick={trigger}>
        <i class="fas fa-trash-alt"></i>
        Remover
      </button>
    </Box>
  );
};

export default DeleteHabit;
