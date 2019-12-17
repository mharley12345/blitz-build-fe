import React, { useContext } from "react";

//components
import Modal from "../global/Modal";
import DelayForm from "./DelayForm";

//context
import DelayLogContext from "../../contexts/delayLog/DelayLogContext";

export default function EditDelayReason({
  editStatus,
  handleEditClose,
  delayReason
}) {
  const { editDelayLog } = useContext(DelayLogContext);
//console.log(delayReason)
  return (
    <>
      <Modal
        visible={editStatus}
        dismiss={handleEditClose}
        client={"60%"}
        component={
          <DelayForm
            closeModal={handleEditClose}
            handleFunction={editDelayLog}
            text={"Edit the reason for the Delay"}
            editFields={delayReason}
          />
        }
      />
    </>
  );
}
