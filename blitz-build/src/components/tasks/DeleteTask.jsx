import React, { useState, useContext } from "react";

// components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function DeleteTask({ task }) {
  const { deleteTask } = useContext(TasksContext);
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
        client={'30%'}
        component={
          <Confirm
            closeModal={handleModalClose}
            text={"Delete Task"}
            deleteFunction={deleteTask}
            deleteItem={task}
          />
        }
      />
    </>
  );
}
