import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../weather/Weather";

const IndividualProject = props => {
  const [projectTasks, setProjectTasks] = useState([]);

  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const projectID = props.match.params.id;
    localStorage.setItem("project_id", props.match.params.id);
    console.log("project id", projectID);
    axios
      .get(
        `https://api-blitz-build-dev.herokuapp.com/api/auth/6Hl3g3QBP2Z3DjsJhY6c704IDZm2/projects/Build Blitz Demo/tasks`
      )
      .then(res => {
        console.log(res);
        const tasksArray = Object.values(res.data);
        console.log(tasksArray);
        setProjectTasks(tasksArray);
      })

      // axios
      //   .get(`https://blitz-build.herokuapp.com/projects/tasks/${projectID}`)
      //   .then(res => {
      //     console.log("res", res.data);
      //     // const tasksObject = Object.assign({}, [res.data]);
      //     // console.log("tasks object", tasksObject);
      //     setProjectTasks(res.data);
      //   })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1> {} </h1>

      {projectTasks.map(tasks => (
        <div key={tasks.task_id}>
          <h1> {tasks.task_name} </h1>
        </div>
      ))}
      <Weather
        usage="project"
        uid={"R3fE6DP3UgP8hQSWbGubsHb7lOw2"}
        city={"City"}
        latitude={47.3099}
        longitude={-122.2653}
      />
    </div>
  );
};

export default IndividualProject;
