import React, { useState, useEffect, useRef } from "react";

//styles
import styled from "styled-components";

//components
import EditDelayReason from "./EditDelayReason";
import DeleteDelayReason from "./DeleteDelayReason";

function DelayLogButton(delayLog) {
  //console.log(delayLog);

  //setting local state
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
      <div
        style={{
          display: "flex",
          width: "35%",
          justifyContent: "flex-end"
        }}
      >
        <EditIcon onClick={handleEditOpen}>
          <ProjectI className="ion-md-create" />
          <p>Edit</p>
        </EditIcon>
        <DeleteIcon onClick={handleDeleteOpen}>
          <ProjectI className="ion-md-trash" />
          <p>Delete</p>
        </DeleteIcon>
      </div>

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

const EditIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;
const DeleteIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;
const ProjectI = styled.i`
  width: 25%;
  height: 18px;
  font-size: 1.4rem;
  background-color: #ffffff;
  color: #8a827d;
  text-align: right;
  text-decoration: none;
`;