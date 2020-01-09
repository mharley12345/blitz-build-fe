import React from "react";
import { Link, withRouter } from "react-router-dom";


import PropTypes from "prop-types";
import Logo from "../images/Logo.svg";
import auth0Client from "../../auth/auth";

//styles
import styled from "styled-components";
import * as color from "../../../styles/color"

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
  box-shadow: 0px 1px 4px ${color.greyLight};
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
    color: ${color.orange};
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
  color: ${color.greyDark};
  margin-left: 64px;
  text-decoration: none;

  :nth-child(2) {
    color: ${color.orange};
  }
`;

export default Header;
