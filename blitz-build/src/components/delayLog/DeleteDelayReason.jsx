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
    const { deleteReason } = useContext(DelayLogContext);
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
            deleteItem={delayReason.data}
            text={`Delay Reason of ${delayReason.data.task_name}`}
          />
        }
      />
    </>
  );
}
