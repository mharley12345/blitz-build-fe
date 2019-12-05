import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "./Task";
import searchTermContext from '../../contexts/searching/searchTerm'
//context 
import taskContext from '../../contexts/tasks/TaskContext'





function DashboardTasks({ projectID, numberOfTasks }) {
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
      <Container>
        <Section>
          <p>Your Task List</p>
        </Section>
        <Card>
          {tasks.slice(0, numberOfTasks).map(item => 
          {  if(taskSearchResults.length > 0) {
            return (
              <div>
  
              </div>
            )
          } else {
            return (
            <Task item={item} key={item.id} />
             )
            }
             })}
             { taskSearchResults.length > 0 ?
              taskSearchResults.map(result => (
                <Task item={result} key={result.id} >
                  </Task>
             )) : <p></p>
            }

        </Card>
      </Container>
    );
  }
  
  export default DashboardTasks;
  
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
  width: 100%;
  margin-top: 20px;
    margin-bottom: 48px;
  `;
  
  const Card = styled.div`
    border: 1px solid #dcd9d5;
  `;
  