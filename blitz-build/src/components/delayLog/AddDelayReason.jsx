import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import DelayForm from "./DelayForm";

//context
import DelayLogContext from "../../contexts/delayLog/DelayLogContext";

export default function AddDelayReason({ task, delayStatus, handleDelayClose }) {
  const { addDelayLog } = useContext(DelayLogContext);

  return (
    <>
      <Modal
        visible={delayStatus}
        dismiss={handleDelayClose}
        client={"40%"}
        component={
          <DelayForm
            closeModal={handleDelayClose}
            handleFunction={addDelayLog}
            task={task}
            text={"Delay Project"}
           
          />
        }
      />
    </>
  );
}
