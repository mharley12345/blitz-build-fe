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
             <p style={{  fontWeight: 600 }}>Your Documents</p><ViewAll href="/documents">View All</ViewAll>
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

const ViewAll = styled.a `

width: 255px;
height: 19px;
left: 857px;
top: 322px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;


text-align: right;
letter-spacing: 0.04em;



color: #817974;
`