<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
import projectContext from "../../contexts/projects/ProjectContext";
import tasksContext from "../../contexts/tasks/TaskContext";
=======

import React, { useState, useEffect,useContext } from "react";
import{ useProjectContext } from "../../contexts/projects/ProjectContext";
import { useTaskContext, newtask  } from "../../contexts/tasks/TaskContext";
>>>>>>> 2938c251e78f2535b3ec6e2a65e58c2b102468f6
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
<<<<<<< HEAD
  //importing state from context from events, projects, and tasks
  const [myEventsList, setMyEventsList] = useState([]);
  const { projects } = useContext(projectContext);
  const { tasks } = useContext(tasksContext);

  useEffect(() => {
    //creates a variable that is all the tasks data mapped over return specific info
    const tasksEvents = tasks.map(task => {
      const newtask = {
        title: `${task.task_name} (${task.project_name})`,
        allDay: true,
        start: new Date(moment(task.due_date).format("L")),
        end: new Date(moment(task.due_date).format("L"))
      };

      return newtask;
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

    //setting variable created above to local state
    setMyEventsList(tasksEvents);
  }, [tasks, projects]);

  console.log(myEventsList);

  //returns calendar
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
=======
    const [myEventsList, setMyEventsList]=useState([])
    const { projects } = useProjectContext();
    const { tasks } = useTaskContext();

    useEffect(() => {

   

       const tasksEvents= tasks.map(task => {

       console.log(newtask(task));
       newtask(task)
        return newtask(task) 
           
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
        
      
   

    }, [tasks,projects]);

    

    return (
      
        <div>  {console.log(myEventsList)}
      
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                
            />  
        
       
          
            
          
        </div>)
      
>>>>>>> 2938c251e78f2535b3ec6e2a65e58c2b102468f6
};

export default  MyCalendar ;

   
