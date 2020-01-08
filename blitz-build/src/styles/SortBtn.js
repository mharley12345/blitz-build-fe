//styles
import styled from "styled-components";
import * as color  from "./color";

export const SortBtn = styled.button`
  font-weight: 600;
  outline: none;
  font-size: 17px;
  background-color: white;
  border: none;
  color: ${props => (props.active === true ? color.primaryColor : color.grey400)};
  padding: 5px 10px;
  text-align-last: right;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;
