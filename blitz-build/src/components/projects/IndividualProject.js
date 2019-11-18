import React, { useState, useEffect } from "react";
import axios from "axios";

const IndividualProject = props => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const project_id = props.match.params.id;
    localStorage.setItem("project_id", props.match.params.id);
    axios
      .get(
        `https://api-blitz-build-pro.herokuapp.com/api/auth/${uid}/projects/${project_id}`,
        project
      )
      .then(res => {
        console.log(res);
        // const projectArray = Object.values(res.data);
        // console.log(projectArray);
        setProject(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
 console.log(project)
  return (
    <div>
      
          <ul>
         <li> <h1> {project.project_name} </h1></li>
          <li>{project.street_address}</li>
          </ul>
   
    </div>
  );
};

export default IndividualProject;
