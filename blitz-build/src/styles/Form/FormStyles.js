import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledFormHeader = styled.div`
margin-top:10px;
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
         width: 100%;
         margin-bottom: 8px;
         margin-top: 4px;
         font-size: 14px;
         padding: 6px 8px;
         background: #e9e9e9;
         border-width: 1px;
         border-style: solid;
         border-radius: 3px;
         border-color: ${props => (props.error ? "red" : " #e9e9e9")};
         box-shadow: none;
       `;
export const StyledTextAreaInput = styled.textarea`
         width: 100%;
        
         font-size: 14px;
         padding: 6px 8px;
         background: #e9e9e9;
         border: "none";
         border-color: ${props => (props.error ? "red" : " #e9e9e9")};
         border-radius: 3px;
       `;
export const StyledSelect = styled.select`
         width: 100%;
         font-size: 14px;
         padding: 6px 8px;
         text-decoration: none;
         border-radius: 3px;
         margin-bottom: 8px;
         margin-top: 4px;

         outline: none;
         border-color: ${props => (props.error ? "red" : "null")};

         background: "#E9E9E9";
         border: "none";
         paddingleft: "10px";
       `;

export const StyledBtn = styled.button`
         margin: 20px auto 20px auto;
         padding: 10px 30px;
         border-radius: 3px;
         border: 1px solid #8a827d;
         background: #da552f;
         color: white;
         text-align: center;
         cursor: pointer;
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
