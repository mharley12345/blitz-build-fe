import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import DelayLogContext from "./DelayLogContext";

export default function DelayLogProvider({ children }) {
  const [delayLogs, setDelayLogs] = useState([]);

  useEffect(() => {
    getDelayLog();
  }, []);

  const getDelayLog = () => {
   

    axiosWithAuth()
      .get("/delay_logs")
      .then(res => {
        console.log("get delay_logs", res.data);
        setDelayLogs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addDelayLog = (newDelay,projectName, taskName) => {
    console.log("new delay", newDelay);

    axiosWithAuth()
      .post(`/delay_logs`, newDelay)
      .then(res => {
        console.log("from add delay_logs in delayLogsProvider", res);
          res.data.log[0].project_name = projectName;
           res.data.log[0].task_name = taskName;
       setDelayLogs([...delayLogs, res.data.log[0]]);
      })
      .catch(err => console.log(err));
  };

    const editDelayLog = (editedReason, id) => {
        console.log("edited Reason", editedReason, id);
        const newReason = {
          reason: editedReason.reason,
          project_id: editedReason.project_id,
          task_id: editedReason.task_id
        };
        axiosWithAuth()
          .put(`/delay_logs/${id}`, newReason)
          .then(res => {
            console.log("from edit delay_logs in delayLogsProvider", res);
            getDelayLog();
          })
            .catch(err => console.log(err));
     
    }

    const deleteReason = deleteReason => {
       console.log("delete reason", deleteReason)
     axiosWithAuth()
       .delete(`/delay_logs/${deleteReason.id}`)
       .then(res => {
         console.log(
           `delayLog with delayLog id:${deleteReason.id} was removed`
         );
       })
       .catch(err => console.log(err));
     const newDelayLogsList = delayLogs.filter(delayLog => {
       return delayLog.id !== deleteReason.id;
     });
     setDelayLogs(newDelayLogsList);
   };
  return (
    <DelayLogContext.Provider
      value={{ delayLogs, addDelayLog, editDelayLog, deleteReason }}
    >
      {children}
    </DelayLogContext.Provider>
  );
}
