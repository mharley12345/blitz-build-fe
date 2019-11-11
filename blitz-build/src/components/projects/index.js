/* this is a comment */

import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = props => {
  const [project, setProject] = useState({});

  useEffect(() => {
    axios.get("");
  }, []);

  return (
    <div>
      {project.map(project => {
        return (
          <div key={project.id}>
            <p>{project.project_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
