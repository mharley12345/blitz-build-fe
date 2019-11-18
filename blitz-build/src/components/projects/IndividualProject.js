import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../weather/Weather";

const IndividualProject = props => {
  const [projectTasks, setProjectTasks] = useState([]);
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const projectID = props.match.params.id;
    localStorage.setItem("project_id", props.match.params.id);
    // axios
    //   .get(
    //     `https://api-blitz-build-dev.herokuapp.com/api/auth/${projectID}/tasks`,
    //     projectTasks
    //   )
    //   .then(res => {
    //     console.log(res);
    //     const tasksArray = Object.values(res.data);
    //     console.log(tasksArray);
    //     setProjectTasks(tasksArray);
    //   })

    axios
      .get(`https://blitz-build.herokuapp.com/projects/tasks/${projectID}`)
      .then(res => {
        console.log(res);
        setProjectTasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1> Single Project </h1>
      {projectTasks.map(tasks => (
        <div key={tasks.task_id}>
          <h1> {tasks.task_name} </h1>

          <Weather
            usage="project"
            uid={uid}
            city={tasks.gps_cords.city}
          ></Weather>
        </div>
      ))}
    </div>
  );
};

export default IndividualProject;
