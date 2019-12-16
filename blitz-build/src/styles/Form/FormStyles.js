import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledFormHeader = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const StyledLabel = styled.label`
  margin-top: 8px;
  margin-bottom: 4px;
  width: 75%;
`;

export const StyledInput = styled.input`
width:100%;
         margin: 0;
         font-size: 14px;
         padding: 6px 8px;
         background: #e9e9e9;
         border-width: 1px;
         border-style: solid;
         border-color: ${props => (props.error ? "red" : " #e9e9e9")};
         outline: none;
         :focus {
           border: none;
         }
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
width:30%;
  margin: 30px auto 0 auto;
  padding: 10px 10px;
  border-radius: 3px;
  border: 1px solid #8a827d;
  background: #da552f;
  color: white;
  text-align:center;
`;
export const XButton = styled.button`
  font-size: 25px;
  background-color: white;
  border: none;
  color: black;
  padding: 10px 10px 0px 10px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
`;
