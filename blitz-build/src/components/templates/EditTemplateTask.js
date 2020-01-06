import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import TemplateTaskForm from "./TemplateTaskForm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function EditTask({ task, editStatus, handleEditClose }) {
  //imports editTask function from tasks which will allows the custom template tasks to be edited
  const { editTask } = useContext(TasksContext);

  return (
    <>
      <Modal
        visible={ editStatus }
        dismiss={ handleEditClose }
        client={'50%'}
        component={
          <TemplateTaskForm
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