import React from "react";
import styled, { css } from "styled-components";

import { media, mediaDown } from "../styles/media"


const Hero = () => {
  return (
    <Container>
      <Inner>
        <Title>
          Construction
          <br />
          Management. Simplified
        </Title>
        <Subheader>Source, plan, and work faster.</Subheader>
        <ButtonGroup>
        <Button>Sign up</Button>
        <Button secondary>Learn more</Button>
        </ButtonGroup>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  height: 582px;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.medium`
  display: flex;
  justify-content: center;
  `};
`;

const Inner = styled.div`
    width: 1200px;
    
`;

const Title = styled.h1`
  font-family: "Roboto";
  font-size: 48px;
  line-height: 56px;
  color: #232323;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;

  ${media.medium`
  text-align: left;
  `};
`;

const Subheader = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  line-height: 28px;
  color: black;
  margin-bottom: 24px;
  text-align: center;

  ${media.medium`
  text-align: left;
  `};
`;

const Button = styled.button`
  border-radius: 3px;
  background: #dd6b20;
  padding: 14px 57px;
  color: #fff;
  font-family: "Roboto";
  line-height: 28px;
  font-size: 24px;
  border: none;
  outline: none;
  margin-right: 16px;
  cursor: pointer;
  width: 100%;
  
  :nth-child(1) {
      margin-bottom: 18px;
  }

  ${media.medium`
  width: auto;
  `};

  ${props =>
    props.secondary &&
    css`
      background: none;
      border: 2px solid #dd6b20;
      color: #dd6b20;
      box-sizing: border-box;
    `};
`;

const ButtonGroup = styled.div`
    /* background: purple; */

`


export default Hero;
