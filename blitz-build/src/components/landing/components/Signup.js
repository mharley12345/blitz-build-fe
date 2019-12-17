import React from "react";
import styled from "styled-components";

const Signup = () => {
  let today = new Date();
  return (
    <Container>
      <Inner>
        <Title>Sign Up Today</Title>
        <P>Set up a free acount and take ownership of your projects.</P>
        <Button>Sign up</Button>
      </Inner>
      <footer>
        {today.getFullYear()} © BlitzBuild, Inc. All Rights Reserved.
      </footer>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  height: 450px;
  background: #3b3b3b;
  padding: 96px 0px 32px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  footer {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    font-family: "Roboto";
    color: white;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  height: 200px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
  color: white;
  font-weight: 600;
  font-family: "Roboto";
  margin-bottom: 16px;
`;

const P = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  line-height: 28px;
  color: white;
  margin-bottom: 24px;
  font-family: "Roboto";
  margin-bottom: 32px;
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
  margin: 0 auto;
  cursor: pointer;
`;
