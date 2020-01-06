import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import ConfirmComplete from "./ConfirmComplete";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function CompleteTask({ task, completeStatus, handleCompleteClose }) {
  const { completeTask } = useContext(TasksContext);

  return (
    <>
      <Modal
        visible={ completeStatus }
        dismiss={ handleCompleteClose }
        client={'50%'}
        component={
          <ConfirmComplete
            closeModal={ handleCompleteClose }
            confirmFunction={ completeTask }
            text={ 'Are you sure you want to mark as completed?' }
            task={task}
            btnText={'Complete'}
          />
        }
      />
    </>
  );
}