import React, { useState } from "react";

// components
import Modal from "../global/Modal";
import Confirm from '../global/Confirm'

export default function DeleteTask() {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModalOpen = () => {
    setModalStatus(true);
  };
  const handleModalClose = () => {
    setModalStatus(false);
  };

  return (
    <>
      <button onClick={handleModalOpen}>Delete</button>
      <Modal
        visible={modalStatus}
        dismiss={handleModalClose}
        component={<Confirm closeModal={handleModalClose} text={"Delete Task"}/>}
      />
    </>
  );
}
