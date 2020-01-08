import React, { Component } from "react";

import styled from "styled-components";
// import PropTypes from "prop-types";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  align-items: baseline;
`;

export const ModalBoxSetup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: ${props => props.width};
  padding: 16px 50px;
  margin: 50px auto;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background: white;
  border: 0.5px solid #e8e8e8;
`;

export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;

/*
visible: boolean,
dismiss: function on click on Close.
*/

//customizable modal
export default class ModalSetup extends Component {
  //  static propTypes = {
  //      visible: PropTypes.bool.isRequired,
  //      dismiss: PropTypes.func.isRequired
  //   };
  render() {
    const { visible, dismiss, component, client } = this.props;
    return (
      <React.Fragment>
        {visible ? (
          <ModalWrapper>
            <ModalBoxSetup width={client}>{component} </ModalBoxSetup>
            <ModalBg onClick={dismiss} />
          </ModalWrapper>
        ) : null}
      </React.Fragment>
    );
  }
}
