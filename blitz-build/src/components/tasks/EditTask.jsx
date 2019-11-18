import React, { useState, useContext } from "react";

//components
import Modal from "../global/Modal";
import TaskForm from "./TaskForm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function EditTask({ task }) {
  const { editTask } = useContext(TasksContext);

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
        visible={ modalStatus }
        dismiss={ handleModalClose }
        client={'50%'}
        component={
          <TaskForm
            closeModal={ handleModalClose }
            handleFunction={ editTask }
            editFields={ task }
            text={ 'Edit Task' }
          />
        }
      />
    </>
  );
}
