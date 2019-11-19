import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "../weather/Weather";
import TaskCard from "../dashboard/TaskCard";

const IndividualProject = props => {
  const [projectTasks, setProjectTasks] = useState([]);

  useEffect(() => {
    const projectID = props.match.params.id;

    axios
      .get(
        `https://blitz-build.herokuapp.com/projects/tasks/${projectID}`,
        projectTasks
      )
      .then(res => {
        console.log("res", res.data);
        // const tasksObject = Object.assign({}, [res.data]);
        // console.log("tasks object", tasksObject);
        setProjectTasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
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
