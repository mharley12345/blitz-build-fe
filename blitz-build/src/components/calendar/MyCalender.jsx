import React, { useState, useEffect, useContext } from "react";
import { useProjectContext } from "../../contexts/projects/ProjectContext";
import { useTaskContext, newtask } from "../../contexts/tasks/TaskContext";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calenderStyles.scss";
import styled, { css } from "styled-components";

const localizer = momentLocalizer(moment);

// Feed standard unixtime inside of a new Date like this:
// new Date(Date.now())
// or like this
// new Date(1576000902214)

//imported calendar from react calendar
const MyCalendar = props => {
  //importing state from context from events, projects, and tasks
  const [myEventsList, setMyEventsList] = useState([]);
  const { projects } = useProjectContext();
  const { tasks } = useTaskContext();

  useEffect(() => {
    //creates a variable that is all the tasks data mapped over return specific info
    const tasksEvents = tasks.map(task => {
      console.log(newtask(task));
      newtask(task);
      return newtask(task);
    });

    // const projectsEvents = projects.map(project => {
    //   const newproject = {
    //     title: project.project_name,
    //     allDay: true,
    //     start: new Date(moment(project.createdAt).format("L")),
    //     end: new Date(moment(project.due_date).format("L"))
    //   };

    //   return newproject;
    // });
    // const eventsList = tasksEvents.concat(projectsEvents);
    setMyEventsList(tasksEvents);
  }, [tasks, projects]);

  //returns calendar

  return (
    <div>
      {" "}
      {console.log(myEventsList)}
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default MyCalendar;
