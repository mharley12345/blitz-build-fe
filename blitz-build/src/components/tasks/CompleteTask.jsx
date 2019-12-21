import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function CompleteTask({ task, completeStatus, handleCompleteClose }) {

  //shows the complete task in the dropdown for tasks
  const { toggleCompleteTask } = useContext(TasksContext);

  //modal that lets you confirm a task is complete
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