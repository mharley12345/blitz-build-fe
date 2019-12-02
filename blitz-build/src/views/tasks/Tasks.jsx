import React, { useContext } from "react";

//context
import taskContext from "../../contexts/tasks/TaskContext";

//components
import Task from "../../components/dashboard/Task";


//styles
import styled from "styled-components";

const StyledTasks = styled.div`
  max-height: 100%
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
<<<<<<< HEAD
            <Task item={task} key={task.id}/>
=======
            <Task item={task} key={task.id} />
>>>>>>> 8a32ea886441abbd92c4fc97857b0d0a0ce94ef5
          </>
        );
      })}
    </StyledTasks>
  );
}
