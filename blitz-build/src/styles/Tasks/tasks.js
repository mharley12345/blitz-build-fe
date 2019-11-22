//styles
import styled from "styled-components";


export const SortButton = styled.button`
  background-color: white
  border: none;
  color: black;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const TaskNavStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const XButton = styled.button`
  font-size: 25px;
  background-color: white;
  border: none;
  color: black;
  padding: 10px 10px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
`;
export const TaskI = styled.i`
  width: 25%;
  height: 18px;
  font-size: 1.4rem;
  background-color: #fbfaf9;
  outline: none
  color: #B5AFAB;
  padding: 10px 10px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
`;

export const MeatBalls = styled.i`
  position: relative;
  width: 18px;
  height: 18px;
  font-size: 1.4rem;
  outline: none
  color: #B5AFAB;
  padding: 10px 10px;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  :hover {
    color: #DD6B20;
    cursor: pointer;
  }

`;

export const StyledLi = styled.li`
  height: 50px;
  display: flex;
  color: #B5AFAB;
  border: 1px solid #B5AFAB;
  text-align: center;
  :hover {
    border: 1px solid #DD6B20 ;
    color: #DD6B20;
    cursor: pointer;
  }

`;

export const DropDown = styled.ul`
border: 1px solid #B5AFAB
background: #fbfaf9
display: flex;
flex-direction: column;
position: absolute;
top: 100%;
right: 0;
width: 175px;
z-index: 2;
`;
