import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import DelayForm from "./DelayForm";

//context
import DelayLogContext from "../../contexts/delayLog/DelayLogContext";

export default function AddDelayReason({
  task,
  delayStatus,
  handleDelayClose
}) {
  //importing a function for adding to the delaylog from context
  const { addDelayLog } = useContext(DelayLogContext);

  //returns modal that allows you to add something to the delay log
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
