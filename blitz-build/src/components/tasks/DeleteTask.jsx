import React, { useContext } from "react";

// components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import TasksContext from "../../contexts/tasks/TaskContext";

export default function DeleteTask({ task, closeDrop, deleteStatus, handleDeleteClose}) {
  const { deleteTask } = useContext(TasksContext);
  return (
    <>
      <Modal
        visible={deleteStatus}
        dismiss={handleDeleteClose}
        client={"40%"}
        component={
          <Confirm
            closeModal={handleDeleteClose}
            deleteFunction={deleteTask}
            deleteItem={task}
            text={task.task_name}
          />
        }
      />
    </>
  );
}
