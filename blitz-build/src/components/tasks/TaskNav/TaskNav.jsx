import React, { useState, useContext } from "react";

//components
import SortBtn from "./SortBtn";
import Modal from "../../global/Modal";
import TaskForm from "../TaskForm";

//styles
import styled from "styled-components";

//context
import TasksContext from "../../../contexts/TaskContext";

//styles
import { AddButton, TaskNavStyle } from "../../../styles/tasks";


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
      <AddButton onClick={ handleModalOpen }>+ Add Task</AddButton>
      <Modal
        visible={ modalStatus }
        dismiss={ handleModalClose }
        component={
          <TaskForm 
          closeModal={ handleModalClose } 
          handleFunction={ addTask }
          text={ 'Add Task' }
        />
        }
      />
    </TaskNavStyle>
  );
}
