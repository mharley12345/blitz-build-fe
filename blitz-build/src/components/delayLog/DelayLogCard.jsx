import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import EditDelayReason from "./EditDelayReason";
import DeleteDelayReason from './DeleteDelayReason'

function DelayLogCard(props) {
  //console.log(props);
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
      <LogCardContainer>
        <LogCardTask>{props.data.task_name}</LogCardTask>
        <LogCardReason>{props.data.reason}</LogCardReason>
        <LogCardCreated>{props.data.createdAt}</LogCardCreated>
        <button onClick={handleEditOpen}>edit</button>
        <button onClick={handleDeleteOpen}>delete</button>
      </LogCardContainer>
      <EditDelayReason
        delayReason={props}
        editStatus={editStatus}
        handleEditClose={handleEditClose}
      />
      <DeleteDelayReason
        delayReason={props}
        deleteStatus={deleteStatus}
        handleDeleteClose={handleDeleteClose}
      />
    </>
  );
}

export default DelayLogCard;

const LogCardContainer = styled.div`
  display: flex;
`;
const LogCardTask = styled.div`
  width: 223px;
  height: 28px;
  padding-top: 16px;
  margin-left: 32px;
  font-family: Roboto;

  font-weight: bold;
  font-size: 24px;

  /* 500 Gray */

  color: #3f3a36;
`;
const LogCardReason = styled.div`
  width: 500px;
  height: 68px;
  padding-top: 16px;
  margin-left: 50px;
  font-family: Roboto;

  font-size: 14px;

  /* 800 Gray */

  color: #3b3b3b;
`;
const LogCardCreated = styled.div`
  width: 210px;
  height: 24px;
  padding-top: 21px;
  margin-left: 50px;
  font-family: Roboto;
  font-size: 14px;

  /* 500 Gray */

  color: #3f3a36;
`;
