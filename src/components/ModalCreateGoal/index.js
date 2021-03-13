import { makeStyles, Modal } from "@material-ui/core";
import { useState } from "react";
import FormCreateGoal from "../FormCreateGoal";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    justifyContent: "space-around",
    // eslint-disable-next-line
    ["@media (min-width:450px)"]: {
      width: 400,
    },
  },
}));

const ModalCreateGoal = ({ getGroup }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <FormCreateGoal handleClose={handleClose} getGroup={getGroup} />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Nova Meta
      </button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default ModalCreateGoal;
