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

width: 255px;
height: 19px;
left: 32px;
top: 32px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */

letter-spacing: 0.04em;

/* 400 Gray */

color: #817974;
`
