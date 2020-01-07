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

  //importing edit delay log function from context
  const { editDelayLog } = useContext(DelayLogContext);
//console.log(delayReason)
  return (
    <>
      <Modal
        visible={editStatus}
        dismiss={handleEditClose}
        client={"40%"}
        component={
          <DelayForm
            closeModal={handleEditClose}
            handleFunction={editDelayLog}
            text={"Edit Delay Reason"}
            editFields={delayReason}
          />
        }
      />
    </>
  );
}
