// react
import { useState } from "react";

// material ui
import { Box, Typography } from "@material-ui/core";
import { DeleteForeverIcon } from "@material-ui/icons/";
//--------------------------------------------------

//--------------------------------------------------
const DeleteHabit = ({ habitID }) => {
  //state para teste
  const [habit, setHabit] = useState(0);

  const onDelete = () => {};

  return (
    <Box>
      <input value={habit} onChange={(e) => setHabit(e.target.value)} />
      <Typography gutterBottom>Delete Habit</Typography>
      <DeleteForeverIcon onClick={onDelete} />
    </Box>
  );
};

export default DeleteHabit;
