import React, { useState, useContext } from "react";

//components
import Modal from "../global/Modal";
import TaskForm from "./TaskForm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

// styles
import { TaskI, StyledLi } from "../../styles/Tasks/tasks"


export default function EditTask({ task, closeDrop, editStatus, handleEditClose }) {
  const { editTask } = useContext(TasksContext);

  return (
    <>
      <Modal
        visible={ editStatus }
        dismiss={ handleEditClose }
        client={'50%'}
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
