import React, { useState, useContext } from "react";

//components
import SortBtn from "./SortBtn";
import Modal from "../../global/Modal";
import TaskForm from "../TaskForm";


//context
import TasksContext from "../../../contexts/tasks/TaskContext";

//styles
import { TaskNavStyle } from "../../../styles/Tasks/tasks";


export default function TaskNav() {
  const { addTask } = useContext(TasksContext);

  const [modalStatus, setModalStatus] = useState(false);
  const handleModalOpen = () => {
    setModalStatus(true);
  };
  const handleModalClose = () => {
    setModalStatus(false);
  };

  return (
    <TaskNavStyle>
      <SortBtn />
    </TaskNavStyle>
  );
}
