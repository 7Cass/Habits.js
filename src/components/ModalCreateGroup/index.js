import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import FormNewGroup from "../FormNewGroup";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import Button from "../Button";

//--------------------------------------------------
const ModalUserGroup = () => {
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
      <FormNewGroup />
    </div>
  );

  return (
    <div>
      <Button size="small" styled="filled" onClick={() => handleOpen()}>
        Crie Seu Grupo
      </Button>
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

export default ModalUserGroup;
