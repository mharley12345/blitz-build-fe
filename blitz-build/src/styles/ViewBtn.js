import styled from "styled-components";
import { primaryColor } from './color'

export const ViewBtn = styled.button`
  outline: none
  font-size: 20px;
  background-color: white;
  border: none;
  color: ${primaryColor};
  padding: 5px 10px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: white
    background: ${primaryColor}
  }
`;