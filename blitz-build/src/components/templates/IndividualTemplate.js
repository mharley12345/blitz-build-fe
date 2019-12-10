import React, { useContext, useEffect, useState } from "react";
import TemplatesProvider from "../../contexts/templates/TemplateProvider";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import PathnameContext from '../../contexts/PathnameContext'
const IndividualTemplate = props => {
  const [templateTasks, setTemplateTasks] = useState([]);
  const { pathname, setPathname } = useContext(PathnameContext)
  useEffect(() => {
    const templateID = props.match.params.id;
    setPathname(window.location.pathname);
    axiosWithAuth()
      .get(`/projects/tasks/template/${templateID}`)
      .then(res => {
        console.log("template tasks", res);
        setTemplateTasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props]);

  return (
    <div>
      <h1>individual template</h1>
      {templateTasks.map(tasks => {
        return <div>{tasks.task_name}</div>;
      })}
    </div>
  );
};

export default IndividualTemplate;
