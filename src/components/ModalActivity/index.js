import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import FormActivity from "../FormActivity";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

//------------------------------------------
const ModalActivity = (props) => {
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
      <FormActivity group={props.group} />
    </div>
  );

  return (
    <div>
      <AddCircleOutlineOutlinedIcon
        fontSize="large"
        type="button"
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      ></AddCircleOutlineOutlinedIcon>
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

export default ModalActivity;
