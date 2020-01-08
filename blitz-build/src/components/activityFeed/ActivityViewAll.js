import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import ActivityFeedTask from '../dashboard/ActivityFeedTask'

//context 
import taskContext from '../../contexts/tasks/TaskContext'
import {  Link } from "react-router-dom";




const ActivityViewAll = () => {

//importing tasks from context
const { tasks } = useContext(taskContext);


//gets the date, then gets the month and day for each date.
const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = JSON.stringify(dateObj.getUTCDate());

//changes the day
const changeTheDay = (day) => {
    if(day.length === 1)
    return `0${day}`
    else {
        return day
    }
}

const year = dateObj.getUTCFullYear();

const newdate = year + "-" + month + "-" + changeTheDay(day);

console.log(newdate);

//filters if something was created today
const wasMadeToday= (createdAt) => {
   if (createdAt) {
       return true
   }
}
  
return (
    <Container>
    <Section>
      <p>Your Recent Activity</p>
      <Link to={'/dashboard'} style={{ textDecoration: 'none'}}><p style={{color: ' #DD6B20'}}>Home</p></Link>
    </Section>
    <ContainerContent>
        <TableHead>
        
      
            <Activity>ACTIVITY</Activity>
            <Name>NAME</Name>
            <Slash></Slash>
            <Address>ADDRESS</Address>
            <Project>PROJECT</Project>
           
        </TableHead>
       
        {tasks.slice(0, 20).map(item => 
          {  if(!item ) { 

            return <div></div>

          
           }
           else if (wasMadeToday(item.createdAt) || item.isComplete === true  ) {
             return (
              <ActivityFeedTask item={item} key={item.id} />
             )
           }
             })}
             

      </ContainerContent>
     
     
    </Container>



)





}

export default ActivityViewAll

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    font-size: 16px;
    line-height: 19px;
    margin: 0;
    color: #212529;
    font-weight: 600;
  }
`;

const Container = styled.p`
  width: 100%;

  
`;
const ContainerContent = styled.div`
width: 100%
margin-top: 20px;
margin-bottom: 48px;
box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
border-radius: 3px;
`


const Card = styled.p`
  border: 1px solid #dcd9d5;
`;

const Activity = styled.p`
color: rgba(0, 0, 0, 0.87);
background-color: #E9E9E9
width: 16%;
flex-direction: column;
display: flex;
font-weight: 500;
margin-left: 3%;

`
const Name = styled.p`
display: flex;
color: rgba(0, 0, 0, 0.87);
background-color: #E9E9E9
width: 27%;
flex-direction: column;
font-weight: 500;
`
const Slash = styled.p`
color: rgba(0, 0, 0, 0.87);
background-color: #E9E9E9
width: 2%;
flex-direction: column;
display: flex;
font-weight: 500;
`
const Address = styled.p`
color: rgba(0, 0, 0, 0.87);
background-color: #E9E9E9
width: 25%;
flex-direction: column;
display: flex;
font-weight: 500;
`

const Project = styled.p`
color: rgba(0, 0, 0, 0.87);
background-color: #E9E9E9
flex-direction: column;
width: 14%;
display: flex;
font-weight: 500;

`

const TableHead = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 height: 72px;
 color: rgba(0, 0, 0, 0.87);
 background-color: #E9E9E9
 box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
border-radius: 3px;
border: 1px solid #dcd9d5;
 
 `


