import React, { useContext} from "react";
import DocumentsContext from '../../contexts/documents/DocumentsContext'
//styles
import styled from "styled-components";
import Global from '../../styles/Global';


const SingleProjectDocCard = (props) =>{
    const {documents} = useContext(DocumentsContext)
 
  var newDocumentList = documents.filter(document => {
      return document.project_name === props.project_name;
  })
        return (
          <>
            <Global />

            {newDocumentList.slice(0, 4).map(document => {
             
                return (
                  <Container>
                    <Name>
                      <p>{document.file_name}</p>
                    </Name>
                    <Date>
                      <p>{document.createdAt}</p>
                    </Date>
                    <a href={document.doc_url} target="_blank">
                      View
                    </a>
                    >
                  </Container>
                );
              
            })}
          </>
        );
  
}

export default SingleProjectDocCard


const Container = styled.div`
padding: 0 15px;
border-bottom:1px solid lightgrey
 height:25%;
 display:flex;
 align-items:center;
`;
const Name = styled.div`
width:55%;
`;
const Date = styled.div`
  width: 30%;
`;