import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import ConfirmComplete from "./ConfirmComplete";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function CompleteTask({ task, completeStatus, handleCompleteClose }) {
  //shows the complete task in the dropdown for tasks
  const { completeTask } = useContext(TasksContext);

  //modal that lets you confirm a task is complete
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