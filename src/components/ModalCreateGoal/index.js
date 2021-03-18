import { Modal } from "@material-ui/core";
import { useState } from "react";
import FormCreateGoal from "../FormCreateGoal";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

//-----------------------------------------------
const ModalCreateGoal = () => {
  const classes = useModalStyles();
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
      <FormCreateGoal handleClose={handleClose} />
    </div>
  );

  return (
    <div>
      <AddCircleOutlineOutlinedIcon
        fontSize="large"
        type="button"
        onClick={handleOpen}
      >
        Nova Meta
      </AddCircleOutlineOutlinedIcon>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default ModalCreateGoal;
