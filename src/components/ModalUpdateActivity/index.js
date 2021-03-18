import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import FormUpdateActivity from "../FormUpdateActivity";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

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
      <FormUpdateActivity activity={props.activity} />
    </div>
  );

  return (
    <div>
      <EditOutlinedIcon
        type="button"
        onClick={handleOpen}
        style={{ fontSize: "2.5rem", margin: "5px", cursor: "pointer" }}
      >
        Editar Nome
      </EditOutlinedIcon>
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
