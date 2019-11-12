// CODE IS MESSY, PLEASE READ AT YOUR OWN RISK

import React from "react";
import styled from "styled-components";

function Activity() {
  return (
    <Container>
      <Part>
        <div></div>
        <p>Jameson Martin</p>
        <p>Completed task for 3882 for Washington St-Incall cabinets</p>
      </Part>
      <Time>2 minutes ago</Time>
    </Container>
  );
}

export default Activity;

const Container = styled.div`
  width: 560px;
  background: white;
  padding: 15px 13px 14px 13px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2px solid #bfbfbf;
  align-items: center;
  font-family: 'Roboto Condensed';
  box-sizing: border-box;

  p {
    font-size: 12px;
    font-family: "Oswald";
    font-weight: 400px;
    line-height: 20px;
    font-family: 'Roboto Condensed'
  }
`;

const Part = styled.div`
  display: flex;
  align-items: center;
  
  div {
    height: 30px;
    width: 30px;
    background-color: #c4c4c4;
    border-radius: 50%;
    margin-right: 11px;
  }

  p {
    margin-right: 11px;
    font-size: 12px;
    font-family: "Oswald";
    font-weight: 400px;
    line-height: 20px;
    font-family: 'Roboto Condensed';
    font-weight: 600;
    color: #282828;

    :nth-child(3) {
      color: rgba(40, 40, 40, 0.75);
      font-weight: 400;
  }
  }
`;

const Time = styled.p`
    color: rgba(40, 40, 40, 0.7);
    font-family: 'Roboto Condensed';
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
`