import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import ConfirmComplete from "./ConfirmComplete";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function ActivateTask({ task, activateStatus, handleActivateClose }) {
  const { activateTask } = useContext(TasksContext);

  return (
    <>
      <Modal
        visible={ activateStatus }
        dismiss={ handleActivateClose }
        client={'50%'}
        component={
          <ConfirmComplete
            closeModal={ handleActivateClose }
            confirmFunction={ activateTask }
            text={ 'Are you sure you want to undo complete?' }
            task={task}
            btnText={'Undo'}
          />
        }
      />
    </>
  );
}