import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import FormActivity from "../FormActivity";
import useStyles from "../../styles/makeStyles";
//------------------------------------------
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

//------------------------------------------
const ModalActivity = (props) => {
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
      <FormActivity getGroup={props.getGroup} />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Adicionar Atividade
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

export default ModalActivity;
