import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import TaskContext from "../../contexts/tasks/TaskContext";

//components
import TaskNav from "../../components/tasks/TaskNav/TaskNav";
import Task from "../../components/dashboard/Task"
import EditTask from "../../components/tasks/EditTask"
import DeleteTask from "../../components/tasks/DeleteTask"

//styles
import styled from "styled-components";
import taskContext from "../../contexts/tasks/TaskContext";
import { TaskBtn } from '../../styles/tasks'

const StyledTasks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;

const ButtonDiv = styled.div`
  background: #fbfaf9;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-content: flex-end
  align-items: center;
`;

const TaskWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

export default function Tasks() {
  const {addTask, tasks}  = useContext(taskContext)
  
  return (
      <StyledTasks>
        <TaskNav addTask={addTask} />
        {tasks.map(task => {
          return (
            <TaskWrapper>
              <Task content={task} status={'Urgent'} />
              <ButtonDiv>
                <TaskBtn>
                <ion-icon ios="ios-more" md="md-more" style={{
                  color: 'black'
                }}></ion-icon>
                </TaskBtn>
                <EditTask task={ task }/>
                <DeleteTask task={ task }/>
              </ButtonDiv>
            </TaskWrapper>
          );
        })}
      </StyledTasks>
  );
}
