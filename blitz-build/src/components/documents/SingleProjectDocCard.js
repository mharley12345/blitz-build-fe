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

const SingleProjectDocCard = (props) =>{
    const {documents} = useContext(DocumentsContext)
 
    
        return(
            <>
            <Global/>
             <p style={{  fontWeight:800 }}>Your Documents</p><a href="/documents">View All</a>
             {documents.map((document) =>{
               if (document.project_name === project_name){
                 return(
              <TableBody>
                  <StyledTableRow>
                      <StyledTableCell>{document.file_name}</StyledTableCell>
                      
                      <StyledTableCell>{document.createdAt}</StyledTableCell>
                      <StyledTableCell><a href={document.doc_url} target="_blank">View</a>></StyledTableCell>
                  </StyledTableRow>
              </TableBody>
             )}})}
             </>
        )
  
}

export default SingleProjectDocCard