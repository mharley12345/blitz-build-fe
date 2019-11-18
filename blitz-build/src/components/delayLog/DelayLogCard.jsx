import React from "react";
import styled from "styled-components";

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

function DelayLogCard(props) {
  console.log(props);
  return (
    <LogCardContainer>
      <LogCardTask>{props.data.taskName}</LogCardTask>
      <LogCardReason>{props.data.reason}</LogCardReason>
      <LogCardCreated>{props.data.timestamp}</LogCardCreated>
    </LogCardContainer>
  );
}

export default DelayLogCard;
