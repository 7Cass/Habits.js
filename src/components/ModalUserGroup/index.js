import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import Group from "../Group";
import { useModalUserGroup } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import Button from "../Button";

//--------------------------------------------------
const ModalUserGroup = ({ group }) => {
  const classes = useModalUserGroup();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paperStyles1}>
      <Group group={group} handleClose={handleClose} />
    </div>
  );

  return (
    <div>
      <Button size="large" styled="filled" onClick={() => handleOpen()}>
        <i class="fas fa-info-circle"></i>
        Detalhes
      </Button>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalUserGroup;
