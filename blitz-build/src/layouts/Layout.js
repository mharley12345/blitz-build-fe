import React from "react";
import styled from "styled-components";

import Global from "./Global";
import Nav from "./Nav";
import Header from './Header'
function Layout({ children }) {
  return (
    <Container>
      <Global />
      <Nav />
      <Main>
        <Header />
        <Content>{children}</Content>
        <Footer>
          <p>2019 © BlitzBuild, Inc. All Rights Reserved.</p>
        </Footer>
      </Main>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  max-height: 100vh;
  display: flex;
`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebe9e7;
  width: 100%;
`;



const Content = styled.div`
  background: #ebe9e7;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  padding: 16px 32px;
  position: fixed;
  bottom: 0;

  p {
    color: #8a827d;
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
  }
`;
