import React, { useState, useContext } from "react";

// components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

// styles
import { TaskI, StyledLi } from "../../styles/Tasks/tasks"

export default function DeleteTask({ task, closeDrop, deleteStatus, handleDeleteClose }) {
  const { deleteTask } = useContext(TasksContext);
  return (
    <>

      <Modal
        visible={deleteStatus}
        dismiss={handleDeleteClose}
        client={'30%'}
        component={
          <Confirm
            closeModal={handleDeleteClose}
            text={"Delete Task"}
            deleteFunction={deleteTask}
            deleteItem={task}
          />
        }
      />
    </>
  );
}
