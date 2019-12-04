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
  height: 100%
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 48px;
`;

export default function Tasks() {
  const { tasks } = useContext(taskContext);

  return (
    <StyledTasks>
      {/* <TaskNav addTask={addTask} /> */}
      {tasks.map((task, i) => {
        return (
          <>
            <Task item={task} key={task.id} />
          </>
        );
      })}
    </StyledTasks>
  );
}
