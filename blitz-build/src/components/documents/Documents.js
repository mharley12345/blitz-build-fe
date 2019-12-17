import React,{useContext} from "react";
import styled from "styled-components";
import DocumentsContext from '../../contexts/documents/DocumentsContext'
import {Table} from 'react-bootstrap'
import './table.css'
const  DocumentCard = (props) => {
  const {document} =
  useContext(DocumentsContext)
  
 


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
                  View ></a>
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

position: relitive;
width: 1150px;
height: 60px;
left: 32px;
top: 32px;
color: white;
background:#3b3b3b
`
