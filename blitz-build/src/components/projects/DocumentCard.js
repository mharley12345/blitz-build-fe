import React from "react";
import styled from "styled-components";



function DocumentCard(props) {
  return (
    <DocumentCardContainer>
      <Name>{props.document.documentName}</Name>
      {/* <Right>
        <Time>{props.document.date}</Time>
        <Time>{props.document.time}</Time>
      </Right> */}
    </DocumentCardContainer>
  );
}

export default DocumentCard;

const DocumentCardContainer = styled.div`
  display: flex;
  width: 530px;
  height: 72px;
`;

const Name = styled.div`
  width: 200px;
  height: 24px;
  margin-top: 16px;
  margin-left: 32px;
  font-family: Roboto;
font-size: 16px;

  /* 800 Gray */

  color: #3b3b3b;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
  margin-left: 206px;
  font-size: 14px;
  color: #8a827d;
`;
const Time = styled.div`
 height: 24px;
`;