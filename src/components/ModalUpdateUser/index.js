import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import FormUpdateUser from "../FormUpdateUser";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";

//--------------------------------------------------
const ModalUpdateUser = () => {
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
      <FormUpdateUser />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Editar usuário
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

export default ModalUpdateUser;
