import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import taskContext from "../../contexts/tasks/TaskContext";

//components
import TaskNav from "../../components/tasks/TaskNav/TaskNav";
import Task from "../../components/dashboard/Task";
import MeatBallsDrop from "../../components/tasks/MeatBallsDrop"

//styles
import styled from "styled-components";

const StyledTasks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonDiv = styled.div`
  background: #fbfaf9;
  width: 100px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  aStyledLign-content: flex-end
  aStyledLign-items: flex-end;
`;

const TaskWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
`;



export default function Tasks() {
  const { tasks } = useContext(taskContext);

  return (
    <StyledTasks>
      {/* <TaskNav addTask={addTask} /> */}
      {tasks.map(task => {
        return (
          <TaskWrapper>
            <Task item={task} />
            {/* <ButtonDiv> */}
              <MeatBallsDrop task={task}/>
            {/* </ButtonDiv> */} 
          </TaskWrapper>
        );
      })}
    </StyledTasks>
  );
}
