// CODE IS MESSY, PLEASE READ AT YOUR OWN RISK

import React from "react";
import styled from "styled-components";

function Task({title, desc, date}) {
    return (
  <Container>
      <Box>
          <h1>{title}</h1>
          <p>{desc}</p>
      </Box>
      <Coco>
        <Yolo>
            <p>{date}</p>
        </Yolo>  
      </Coco>
  </Container>
    )
}

export default Task;

const Container = styled.div`
    height: 83px;
    width: 562px;
    background: white;
    border: 1px solid #bfbfbf;

    box-sizing: border-box;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

const Box = styled.div`
    margin: 25px 0px 24px 24px;

    h1 {
        font-size: 12px;
        line-height: 14px;
        font-family: 'Roboto Condensed';
        margin-bottom: 6px;
        font-weight: 600;
        margin-top: 0px; /* Remove when CSS reset */
    }

    p {
        font-size: 12px;
        line-height: 14px;
        font-family: 'Roboto Condensed';
        font-weight: 400;
        margin: 0px; /* Remove when CSS reset */
    }
`

const Yolo = styled.div`
    height: 25px;
    width: 99px;
    background: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;

    p {
        text-transform: uppercase;
        font-size: 12px;
        line-height: 14px;
        font-family: 'Roboto Condensed';
        font-weight: 600;
    }
`

const Coco = styled.div`
    height: 100%;
    width: 99px;

`