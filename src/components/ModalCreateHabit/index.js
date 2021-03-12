import { Modal } from "@material-ui/core";
import { useState } from "react";

import CreateHabitForm from "../FormCreateHabit";

const ModalCreateHabit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Criar Hábito</button>
      <Modal open={isOpen} onClose={handleClose}>
        <CreateHabitForm />
      </Modal>
    </>
  );
};

export default ModalCreateHabit;
