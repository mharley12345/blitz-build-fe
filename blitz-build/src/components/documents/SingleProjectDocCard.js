import React, { useContext} from "react";
import DocumentsContext from '../../contexts/documents/DocumentsContext'
import styled from 'styled-components'


import TableBody from "@material-ui/core/TableBody";
import Global from '../../styles/Global';


import {
  StyledTableRow,

  StyledTableCell
} from "../../styles/Table/TableStyles";

const project_name = localStorage.getItem('project_name')
const SingleProjectDocCard = () =>{
    const {document} = useContext(DocumentsContext)

    
        return(
            <>
            <Global/>
             <p style={{  fontWeight:800 }}>Your Documents</p><a href="/documents">View All</a>
             {document.map(documents=>{
               if (documents.project_name === project_name){
                 return(
              <TableBody>
                  <StyledTableRow>
                      <StyledTableCell>{documents.file_name}</StyledTableCell>
                      
                      <StyledTableCell>{documents.createdAt}</StyledTableCell>
                      <StyledTableCell><a href={documents.doc_url}>View</a>></StyledTableCell>
                  </StyledTableRow>
              </TableBody>
                 )}})}
             </>
        )
  
}

export default SingleProjectDocCard