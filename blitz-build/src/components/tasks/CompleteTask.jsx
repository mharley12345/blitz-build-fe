import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function CompleteTask({ task, completeStatus, handleCompleteClose }) {
  const { toggleCompleteTask } = useContext(TasksContext);

  return (
    <>
      <Modal
        visible={ completeStatus }
        dismiss={ handleCompleteClose }
        client={'50%'}
        component={
          <Confirm
            closeModal={ handleCompleteClose }
            handleFunction={ toggleCompleteTask }
            text={ 'Edit Task' }
          />
        }
      />
    </>
  );
}