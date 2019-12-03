import React, { useContext, useState, useEffect } from "react";

//context
import taskContext from "../../contexts/tasks/TaskContext";
import searchTermContext from '../../contexts/searching/searchTerm'
//components
import Task from "../../components/dashboard/Task";


//styles
import styled from "styled-components";
let uid = localStorage.getItem('uid')
let projectID = localStorage.getItem('projectID')
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
  const { searchTerm } = useContext(searchTermContext)
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([]);


useEffect(() => {
   const results= tasks.filter(task =>
    task.task_name.toLowerCase().includes(taskSearchInput)
    
    ) 
console.log("RESULTS:", results);
    setTaskSearchResults(results);
  
  }, [taskSearchInput]);

  return (
    <StyledTasks>
      {/* <TaskNav addTask={addTask} /> */}
      {tasks.map(task => {
        if(taskSearchResults.length > 0) {
          return (
            <div>

            </div>
          )
        }
        else {
        return (
          <>
            <Task item={task} key={task.id} />
          </>

        );
        }

      })}
        { taskSearchResults.length > 0 ?
              taskSearchResults.map(result => (
                <Task item={result} key={result.id} >
                  </Task>
             )) : <p></p>
            }
    </StyledTasks>
  );
}
