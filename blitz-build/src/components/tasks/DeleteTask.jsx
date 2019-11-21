import React, { useState, useContext } from "react";

// components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

// styles
import { TaskI } from "../../styles/tasks"

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
      <TaskI 
        onClick={handleModalOpen}
        className='ion-md-trash'
      />
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
