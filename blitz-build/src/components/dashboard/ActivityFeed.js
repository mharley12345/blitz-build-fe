import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "./Task";
import CompletedTask from './CompletedTask'
import NewTask from './NewTask'
//context 
import taskContext from '../../contexts/tasks/TaskContext'





function ActivityFeed({ projectID, numberOfTasks }) {
    const { tasks } = useContext(taskContext);
    const [projectTasks, setProjectTasks] = useState([]);
    const [taskSearchResults, setTaskSearchResults] = useState([]);

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = JSON.stringify(dateObj.getUTCDate());

    const changeTheDay = (day) => {
        if(day.length === 1)
        return `0${day}`
        else {
            return day
        }
    }

 const year = dateObj.getUTCFullYear();

const newdate = year + "-" + month + "-" + changeTheDay(day);

 console.log(newdate);
   const wasMadeToday= (createdAt) => {
       if (createdAt) {
           return true
       }
   }
      
  
    return (
      <Container>
        <Section>
          <p>Your Recent Activites</p>
        </Section>
        <Card>
          {tasks.slice(0, numberOfTasks).map(item => 
          {  if(!item) { 

            return <div></div>

          } else if(item.isComplete === true) {
            return (
            <CompletedTask item={item} key={item.id} />
             )
           }
           else if (wasMadeToday(item.createdAt)) {
             return (
              <NewTask item={item} key={item.id} />
             )
           }
             })}

        </Card>
      </Container>
    );
  }
  
  export default ActivityFeed;
  
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
  width: 65%;
  margin-top: 20px;
    margin-bottom: 48px;
  `;
  
  const Card = styled.div`
    border: 1px solid #dcd9d5;
  `;
  