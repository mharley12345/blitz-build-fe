import React,{useContext,useState} from "react";
import styled from "styled-components";
import DocumentsContext from '../../contexts/documents/DocumentsContext'
import {Table} from 'react-bootstrap'

import {axiosWithAuth} from '../../utils/auth/axiosWithAuth'
import './table.css'
const user_id = localStorage.getItem("user_id")
const file_name = localStorage.getItem("file_name")
const  DocumentCard = (props) => {
  const {document} =
  useContext(DocumentsContext)
console.log(user_id,file_name,"DKDKDKDKDKDKDKDK")
 const handleDelete = (ev) =>{


     axiosWithAuth().delete(`/docs/url/${file_name}`,user_id)
   
     
 }


  return (
    <>

   <div className='tbl-container'>
  <Theader>Your Documents</Theader>

 <Table responsive>

       <thead>
             <tr>
          
               <th>NAME</th>
               <th className="hide" value="false">PROJECT</th>
               <th className="hide" value="false">CREATED</th>
               <th>VIEW</th>
               
             </tr>
             </thead>
   {document.map((documents)=>{
    return(
         
            
            
             <tbody  >
               <tr  onSubmit={handleDelete()}>
                 <td >{documents.file_name}</td>
                 <td className="hide" value="false">{documents.project_name}</td>
                 <td className="hide" value="false">{documents.createdAt}</td>
                 <td> 
                 <a href ={documents.doc_url} 
                  rel="noopener noreferrer" target="_blank">
                  View</a> ><button type="submit">Delete</button>
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


const Theader = styled.div `

width: 255px;
height: 19px;
left: 32px;
top: 32px;


font-style: normal;
color: #212529;
font-weight: 600;
font-size: 16px;
line-height: 19px;
/* identical to box height */

letter-spacing: 0.04em;

/* 400 Gray */


`
