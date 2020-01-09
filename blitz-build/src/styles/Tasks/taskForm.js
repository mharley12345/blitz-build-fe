import styled from "styled-components";
import * as color from "../color"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 4px;
  width: 75%;
  color: ${color.greyDark};
`;

export const StyledInput = styled.input`
  width: 75%;
  height: 48px;
  margin: 0;
  font-size: 14px;
  background: ${color.greyLightest};
  border-radius: 3px;
  box-shadow: none;
  color: ${color.greyDark};
  
`;
export const StyledTextAreaInput = styled.textarea`
  width: 75%;
  margin: 0;
  font-size: 14px;
  padding: 6px 8px;
  background: #fbfaf9;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "black")};
  border-radius: 3px;
`;
export const StyledSelect = styled.select`
  width: 75%;
  height: 48px;
  font-size: 14px;
  padding: 6px 8px;
  text-decoration: none;
  border-top: none;
  border-left: none;
  border-right: none;
  background: ${color.greyLightest};
  outline: none;
  margin: 0;
`;

export const StyledBtn = styled.button`
  margin-top: 73px;
  padding: 10px 50px;
  border-radius: 3px;
  border: 1px solid ${color.grey};
  background: #da552f;
  color: white;
`;
