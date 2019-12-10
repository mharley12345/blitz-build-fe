import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";
import PathnameContext from '../../contexts/PathnameContext'
const NinetyDayTemplate = props => {
  const [templateTasks, setTemplateTasks] = useState([]);
  const { pathname, setPathname } = useContext(PathnameContext)

  useEffect(() => {
    setPathname(window.location.pathname)
    axiosWithAuth()
      .get(`/90_Day`)
      .then(res => {
        console.log("template tasks", res);
        setTemplateTasks(res.data[0].template);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props]);

  return (
    <div>
      <h1>90 Day Template</h1>
      {templateTasks.map(tasks => {
        return <div>{tasks.task_name}</div>;
      })}
    </div>
  );
};

export default NinetyDayTemplate;
