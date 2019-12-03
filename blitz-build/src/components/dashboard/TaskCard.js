import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "./Task";

//context 
import taskContext from '../../contexts/tasks/TaskContext'

function TaskCard({ projectID, numberOfTasks }) {
  const { tasks } = useContext(taskContext);
  const [projectTasks, setProjectTasks] = useState([]);
  let renderedTasks
  
  if(projectID){
      axiosWithAuth()
        .get(`projects/tasks/byProject/${projectID}`)
        .then(res => {
          setProjectTasks(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    renderedTasks  = projectTasks
  } else {
    renderedTasks = tasks
  }


  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <p>View All</p>
      </Section>
      <Card>
        {renderedTasks.slice(0, numberOfTasks).map(item => {
          return <Task item={item} key={item.id} />})}
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
