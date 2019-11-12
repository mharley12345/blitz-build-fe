import React, { useState } from "react";

//components
import Modal from "../global/Modal";
import TaskForm from "./TaskForm";

export default function EditTask() {
  const [modalStatus, setModalStatus] = useState(false);

  const handleModalOpen = () => {
    setModalStatus(true);
  };
  const handleModalClose = () => {
    setModalStatus(false);
  };

  return (
    <>
      <button onClick={ handleModalOpen }>Edit</button>
      <Modal
        visible={modalStatus}
        dismiss={handleModalClose}
        component={<TaskForm closeModal={handleModalClose} />}
      />
    </>
  );
}
