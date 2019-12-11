import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "./Task";
import searchTermContext from '../../contexts/searching/searchTerm'
//context 
import taskContext from '../../contexts/tasks/TaskContext'

function TaskCard({ projectID, numberOfTasks, AddTask}) {
 
  const { projectTasks, setProjectTasks, getProjectTasks, tasks, setTasks, getTasks } = useContext(taskContext);
  const { searchTerm } = useContext(searchTermContext)
  const [results, setResults ] = useState([])
  const taskSearchInput = searchTerm.toLowerCase();
  const [taskSearchResults, setTaskSearchResults] = useState([])
 console.log("projectID:", projectID)
  useEffect(() => {
    if(searchTerm.length === 0) {
      setResults([])
  }
  else {
     setResults( projectTasks.filter(task =>
    task.task_name.toLowerCase().includes(taskSearchInput))
    ) 
  }
  console.log("RESULTS:", results);
      setTaskSearchResults(results);
   
    
    getTasks();
  },[])


  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <p>View All</p>
      </Section>
      <Card>
        {tasks.map(item => 
       
        { if(results.length > 0 ) {
          
          return (
            <div>

            </div>
          )
        } else if( JSON.stringify(item.project_id) === projectID ) { 
        return (
          <Task item={item} key={item.id} results={results} setResults={setResults}  />
           )
         }
           })}
            { results.length > 0 ?
              taskSearchResults.map(result => (
                <Task item={result} key={result.id}   >
                  </Task>
             )) : <p></p>
            }
      </Card>
    </Container>
  );
}

export default TaskCard;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    line-height: 19px;
    color: #8a827d;
    font-weight: 500;
  }
`;

const Container = styled.div`

margin-top: 20px;
  margin-bottom: 48px;
`;

const Card = styled.div`
  border: 1px solid #dcd9d5;
`;
