import { Modal } from "@material-ui/core";
import { useState } from "react";
import FormCreateGoal from "../FormCreateGoal";
import useStyles from "../../styles/makeStyles";
//-----------------------------------------------
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

//-----------------------------------------------
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
    <div style={modalStyle} className={classes.paperStyles}>
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
