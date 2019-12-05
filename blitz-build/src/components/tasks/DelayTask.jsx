import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import DelayForm from "./DelayForm";

//context
//import TasksContext from "../../contexts/tasks/TaskContext";

export default function DelayTask({ task, delayStatus, handleDelayClose }) {
  //const { addDelay } = useContext(DelayLogContext);

  return (
    <>
      <Modal
        visible={delayStatus}
        dismiss={handleDelayClose}
        client={"60%"}
        component={
          <DelayForm
            closeModal={handleDelayClose}
            //handleFunction={addDelay}
            task={task}
          />
        }
      />
    </>
  );
}
