import React, { useState, useEffect } from "react";
import axios from "axios";

const IndividualProject = props => {
  const [project, setProject] = useState({});

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const projectID = props.match.params.id;
    axios
      .get(
        `https://api-blitz-build-dev.herokuapp.com/api/auth/${uid}/projects/${projectID}/tasks`,
        project
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Single Project</h1>
    </div>
  );
};

export default IndividualProject;
