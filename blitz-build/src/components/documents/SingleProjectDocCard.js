import React, { useContext} from "react";
import DocumentsContext from '../../contexts/documents/DocumentsContext'
//styles
import styled from "styled-components";
import Global from '../../styles/Global';

/** SingleProjectDocCard
 *  The SingleProjectDocCard componet is almost the same component as the
 *   Documents component except it only displays documents for one specific 
 *   project.
 *
 */
/** TODO  
 *  The component currently opens the document in a seperate window
 *  we may want to have it open in the ViewDocument component
 */
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
                    <a href={document.doc_url} rel="noopener noreferrer" target="_Blank">
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
  height: 25%;
  display: flex;
  align-items: center;
  :nth-child(odd) {
    background: #f5f5f5;
  }
`;
const Name = styled.div`
width:55%;
`;
const Date = styled.div`
  width: 30%;
`;