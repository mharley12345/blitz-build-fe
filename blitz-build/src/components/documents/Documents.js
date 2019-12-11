import React,{useState,useEffect,Fragment} from "react";
import styled from "styled-components";
import {axiosWithAuth} from "../../utils/auth/axiosWithAuth";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Table,tr,th,td,tbody} from 'react-bootstrap'
import './table.css'
const  DocumentCard = (props) => {
  const[document,setDocument] =useState([])
  
  const handleClick =(ev)=>{
    let id = ev.target.id
    axiosWithAuth().delete(`/docs/url/${id}`).then(res=>{console.log(res)})
  
  }
  useEffect(() =>{
 
    axiosWithAuth()
    .get(`/docs/url`)
     
    .then(response =>{
      console.log(response.data)
      let docs = response.data
      console.log(docs)
     
    
    
      setDocument(docs)
    })
  },[])

  console.log(document)
  return (
    <>

   <div className='tbl-container'>
  <Theader>Your Documents</Theader>
<div className='sort'>Sort </div>
 <Table responsive>

       <thead>
             <tr>
               <th>Name</th>
               <th>Project</th>
               <th>Created</th>
               <th>View</th>
               
             </tr>
             </thead>
   {document.map((documents)=>{
    return(
         
            
            
             <tbody>
               <tr>
                 <td>{documents.file_name}</td>
                 <td>{documents.project_name}</td>
                 <td>{documents.createdAt}</td>
                 <td> 
                 <a href ={documents.doc_url} 
                  rel="noopener noreferrer" target="_blank">
                  View</a><ChevronRightIcon/>
                  </td>
               </tr>
             </tbody>
      )}
         
   )
   }
   </Table>
   </div>
   </>


  )
  }
export default DocumentCard;

const DocumentCardContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 960px;
  height: 300px;
`;

const Name = styled.div`
  width: 200px;
  text-transform:uppercase;
  height: 24px;
  margin-top: 16px;
  margin-left: 32px;
  font-family: Roboto;
font-size: 16px;

  /* 800 Gray */

  color: #3b3b3b;
`;
const Theader = styled.div `

position: relitive;
width: 1150px;
height: 60px;
left: 32px;
top: 32px;
color: white;
background:#3b3b3b
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
  margin-left: 206px;
  font-size: 14px;
  color: #8a827d;
`;
const Time = styled.div`
 height: 24px;
`;