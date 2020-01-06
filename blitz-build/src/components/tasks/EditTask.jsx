import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import TaskForm from "./TaskForm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function EditTask({ task, editStatus, handleEditClose }) {

  //imports editTask function from tasks contexts
  const { editTask } = useContext(TasksContext);

  return (
    <>
      <Modal
        visible={ editStatus }
        dismiss={ handleEditClose }
        client={'45%'}
        component={
          <TaskForm
            closeModal={ handleEditClose }
            handleFunction={ editTask }
            editFields={ task }
            text={ 'Edit Task' }
          />
        }
      />
    </>
  );
}
