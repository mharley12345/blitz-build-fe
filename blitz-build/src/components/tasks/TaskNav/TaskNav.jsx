import React, { useState, useContext } from "react";

//components
import SortBtn from "./SortBtn";
import Modal from "../../global/Modal";
import TaskForm from "../TaskForm";

//styles
import styled from "styled-components";

//context
import TasksContext from "../../../contexts/TaskContext";

const taskNavStyle = styled.div`
  margin-left: 200px;
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
    <taskNavStyle>
      <SortBtn />
      <button onClick={ handleModalOpen }>add</button>
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
    </taskNavStyle>
  );
}
