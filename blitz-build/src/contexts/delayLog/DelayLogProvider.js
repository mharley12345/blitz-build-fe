import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import DelayLogContext from "./DelayLogContext";

export default function DelayLogProvider({ children }) {
  const [delayLogs, setDelayLogs] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/delay_logs")
      .then(res => {
        console.log("get delay_logs", res.data);
        setDelayLogs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const addDelayLog = (newDelay,projectName, taskName) => {
    console.log("new delay", newDelay);

    axiosWithAuth()
      .post(`/delay_logs`, newDelay)
      .then(res => {
        console.log("from delay_logs in delayLogsProvider", res);
          res.data.log[0].project_name = projectName;
           res.data.log[0].task_name = taskName;
       setDelayLogs([...delayLogs, res.data.log[0]]);
      })
      .catch(err => console.log(err));
  };

  
  return (
    <DelayLogContext.Provider
      value={{ delayLogs, addDelayLog}}
    >
      {children}
    </DelayLogContext.Provider>
  );
}
