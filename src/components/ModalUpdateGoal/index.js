import { Modal } from "@material-ui/core";
import { useState } from "react";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import FormUpdateGoal from "../FormUpdateGoal";

//-----------------------------------------------
const ModalUpdateGoal = () => {
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
      <FormUpdateGoal handleClose={handleClose} />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Editar Meta
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalUpdateGoal;
