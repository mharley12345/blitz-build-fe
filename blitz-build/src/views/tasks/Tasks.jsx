import React, { useContext } from "react";

//context
import taskContext from "../../contexts/tasks/TaskContext";

//components
import Task from "../../components/dashboard/Task";


//styles
import styled from "styled-components";
let uid = localStorage.getItem('uid')
let projectID = localStorage.getItem('projectID')
const StyledTasks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function Tasks() {
  const { tasks } = useContext(taskContext);

  return (
    <StyledTasks>
      {/* <TaskNav addTask={addTask} /> */}
      {tasks.map(task => {
        return (
          <>
            <Task item={task} key={task.id} >
             
            </Task>
            {/* <ButtonDiv> */}
            {/* </ButtonDiv> */} 
          </>
        );
      })}
    </StyledTasks>
  );
}
