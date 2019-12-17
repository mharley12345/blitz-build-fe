import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledLabel = styled.label`
  margin-top: 20px;
  margin-bottom: 4px;
  width: 75%;
`;

export const StyledInput = styled.input`
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
  width: 77%;
  font-size: 14px;
  padding: 6px 8px;
  text-decoration: none;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-color: ${props => (props.error ? "red" : "black")};
  margin: 0;
`;

export const StyledBtn = styled.button`
  margin-top: 73px;
  padding: 10px 50px;
  border-radius: 3px;
  border: 1px solid #8a827d;
  background: #da552f;
  color: white;
`;