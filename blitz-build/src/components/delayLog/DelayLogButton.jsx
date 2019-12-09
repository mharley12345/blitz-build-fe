import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import EditDelayReason from "./EditDelayReason";
import DeleteDelayReason from "./DeleteDelayReason";

function DelayLogButton(delayLog) {
  //console.log(delayLog);
  const [editStatus, setEditStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  //edit modal functions
  const handleEditOpen = e => {
    e.stopPropagation();
    setEditStatus(true);
  };
  const handleEditClose = e => {
    setEditStatus(false);
  };

  //delete modal functions
  const handleDeleteOpen = e => {
    e.stopPropagation();
    setDeleteStatus(true);
  };
  const handleDeleteClose = e => {
    setDeleteStatus(false);
  };
  return (
    <>
      <button onClick={handleEditOpen}>edit</button>
      <button onClick={handleDeleteOpen}>delete</button>

      <EditDelayReason
        delayReason={delayLog}
        editStatus={editStatus}
        handleEditClose={handleEditClose}
      />
      <DeleteDelayReason
        delayReason={delayLog}
        deleteStatus={deleteStatus}
        handleDeleteClose={handleDeleteClose}
      />
    </>
  );
}

export default DelayLogButton;
