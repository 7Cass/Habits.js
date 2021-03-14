import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import FormUpdateActivity from "../FormUpdateActivity";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";

//--------------------------------------------------
const ModalUpdateActivity = (props) => {
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
      <FormUpdateActivity getGroup={props.getGroup} actId={props.actId} />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Editar Nome
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

export default ModalUpdateActivity;
