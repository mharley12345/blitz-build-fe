import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import ConfirmComplete from "./ConfirmComplete";

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
          <ConfirmComplete
            closeModal={ handleCompleteClose }
            confirmFunction={ toggleCompleteTask }
            text={ 'Edit Task' }
            task={task}
          />
        }
      />
    </>
  );
}