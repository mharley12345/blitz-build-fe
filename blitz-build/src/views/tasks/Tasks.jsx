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
import { TaskI } from '../../styles/tasks'


const StyledTasks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;

const ButtonDiv = styled.div`
  position: relative;
  background: #fbfaf9;
  width: 100px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  align-content: flex-end
  align-items: flex-end;
`;

const TaskWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;

const DropDown = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 100%;
left: 0;
width: 100px;
z-index: 2;
border: 1px solid rgba(0, 0, 0, 0.04);
box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`

export default function Tasks() {
  const { tasks}  = useContext(taskContext)
  
  return (
      <StyledTasks>
        {/* <TaskNav addTask={addTask} /> */}
        {tasks.map(task => {
          return (
            <TaskWrapper>
              <Task content={task} status={'Urgent'} />
              <ButtonDiv>
                <TaskI className= "ion-ios-more"/>
                {/* <DropDown> */}
                  <EditTask task={ task }/>
                  <DeleteTask task={ task }/>
                {/* </DropDown> */}
              </ButtonDiv>
            </TaskWrapper>
          );
        })}
      </StyledTasks>
  );
}
