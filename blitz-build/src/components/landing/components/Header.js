import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.svg";

import { Link, withRouter } from "react-router-dom";
import auth0Client from "../../auth/auth";

import { media, mediaDown } from "../styles/media";

const Header = ({ siteTitle }) => {
  return (
    <Container>
      <Inner>
        <img src={Logo} alt="#" />
        <LinkGroup>
          <Auth0Link onClick={auth0Client.signIn}>Login</Auth0Link>
          <Auth0Link onClick={auth0Client.signIn}>Sign up</Auth0Link>
        </LinkGroup>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  background: white;
  max-width: 100%;
  box-shadow: 0px 1px 4px #dcd9d5;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;

  ${media.medium`
  `};

  ${media.large`
  justify-content: center;
  `};
`;

const Inner = styled.div`
  display: flex;

  ${media.medium`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  `};
`;

const LinkGroup = styled.div`
  display: flex;
  visibility: hidden;
  align-items: center;
  margin: 0px;

  :nth-child(2) {
    color: #dd6b20;
  }

  ${media.medium`
    visibility: visible;
  `};
`;

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

const Auth0Link = styled(Link)`
  font-family: "Roboto";
  font-size: 24px;
  line-height: 28px;
  color: #3b3b3b;
  margin-left: 64px;
  text-decoration: none;

  :nth-child(2) {
    color: #dd6b20;
  }
`;

export default Header;
