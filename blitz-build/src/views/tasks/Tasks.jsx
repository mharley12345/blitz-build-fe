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
  height: 100%
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 48px;
`;

export default function Tasks() {
  const { tasks, getTasks } = useContext(taskContext);
  const { searchTerm, setSearchTerm } = useContext(searchTermContext)
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([]);
  const [results, setResults ] = useState([])
 

useEffect(() => { 

  if(searchTerm.length === 0) {
      setResults([])
  }
  else {
     setResults( tasks.filter(task =>
    task.task_name.toLowerCase().includes(taskSearchInput))
    ) 
  }

   
console.log("RESULTS:", results);
    setTaskSearchResults(results);
  
  }, [taskSearchInput]);

  return (
    <StyledTasks>
      {/* <TaskNav addTask={addTask} /> */}
      {tasks.map(task => {
        console.log(task.createdAt)
        if(results.length > 0) {
          return (
            <div>

            </div>
          )
          } else {
           
        return (
          <>
            <Task item={task} key={task.id} />
          </>

        );
        }

      })}
        { results.length > 0 ?
              taskSearchResults.map(result => (
                <Task item={result} key={result.id} >
                  </Task>
             )) : <p></p>
            }
    </StyledTasks>
  );
}
