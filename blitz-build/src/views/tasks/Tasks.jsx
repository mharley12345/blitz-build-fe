import React, { useContext } from "react";

//context
import taskContext from "../../contexts/tasks/TaskContext";

//components
import Task from "../../components/dashboard/Task";
import MeatBallsDrop from "../../components/tasks/MeatBallsDrop"

//styles
import styled from "styled-components";

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
              <MeatBallsDrop task={task}/>
            </Task>
            {/* <ButtonDiv> */}
            {/* </ButtonDiv> */} 
          </>
        );
      })}
    </StyledTasks>
  );
}
