import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import Task from "./Task";

import ActivityFeedTask from "./ActivityFeedTask";
//context
import taskContext from "../../contexts/tasks/TaskContext";
import { Link } from "react-router-dom";

function ActivityFeed({ projectID, numberOfTasks }) {
  //importing state of tasks from context
  const { tasks } = useContext(taskContext);
  //getting a date and then assigning separate variables for months and days
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = JSON.stringify(dateObj.getUTCDate());

  //changes the day
  const changeTheDay = day => {
    if (day.length === 1) return `0${day}`;
    else {
      return day;
    }
  };

  //gets year from new.Date()
  const year = dateObj.getUTCFullYear();

  const newdate = year + "-" + month + "-" + changeTheDay(day);

  console.log(newdate);
  const wasMadeToday = createdAt => {
    if (createdAt) {
      return true;
    }
  };

  //returns the activity feed on the dashboard
  return (
    <Container>
      <Section>
        <p>Your Recent Activites</p>
        <Link to={"/activity-feed"} style={{ textDecoration: "none" }}>
          <p style={{ color: "#DD6B20" }}>View All</p>
        </Link>
      </Section>
      <Card>
        {tasks.slice(0, numberOfTasks).map(item => {
          if (!item) {
            return <div></div>;
          } else if (wasMadeToday(item.createdAt) || item.isComplete === true) {
            return <ActivityFeedTask item={item} key={item.id} />;
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
    font-size: 16px;
    line-height: 19px;
    color: #212529;
    font-weight: 600;
  }
`;
const Container = styled.div`
  width: 65%;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 48px;
`;
const Card = styled.div`
  border: 1px solid #dcd9d5;
  border-radius: 3px;
`;
