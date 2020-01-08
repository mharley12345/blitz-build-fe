import React, { useContext } from "react";

// components
import Modal from "../global/Modal";
import Confirm from "../global/Confirm";

//context
import DelayLogContext from "../../contexts/delayLog/DelayLogContext";

export default function DeleteDelayReason({
  delayReason,
  deleteStatus,
  handleDeleteClose
}) {

  //importings delete function function for delay logs from context
  const { deleteReason } = useContext(DelayLogContext);
  //console.log(delayReason);
  return (
    <>
      <Modal
        visible={deleteStatus}
        dismiss={handleDeleteClose}
        client={"60%"}
        component={
          <Confirm
            closeModal={handleDeleteClose}
            deleteFunction={deleteReason}
            deleteItem={delayReason.delayLog}
            text={`Delay Reason of ${delayReason.delayLog.task_name}`}
          />
        }
      />
    </>
  );
}
