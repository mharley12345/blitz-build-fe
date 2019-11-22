import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Task from "./Task";

function TaskCard() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    axios
      .get(`https://blitz-build.herokuapp.com/tasks/project/1`, task)
      .then(res => {
        setTask(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Section>
        <p>Your Task List</p>
        <p>View All</p>
      </Section>
      <Card>
        {task.map((item) => (
          <Task key={item.id} item={item} />
        ))}
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
