import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import GroupDetail from "../GroupDetail";
import { useModalUserGroup } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import Button from "../Button";

//--------------------------------------------------
const ModalGroupDetail = ({ group }) => {
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
      <GroupDetail group={group} handleClose={handleClose} />
    </div>
  );

  return (
    <div>
      <Button size="large" styled="outlined-light" onClick={() => handleOpen()}>
        <i class="fas fa-info-circle" /> Detalhes
      </Button>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalGroupDetail;
