import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DeleteDocument({deleteStatus,handleDeleteClose,documents}){
   
       const {handleDelete} =useContext(DocumentContext)
     console.log(documents);
    return (
      <>
        <Modal
          visible={deleteStatus}
          dismiss={handleDeleteClose}
          client={"40%"}
          component={
            <Confirm
              closeModal={handleDeleteClose}
              deleteFunction={handleDelete}
              deleteItem={documents.document}
              text={`${documents.document.file_name}`}
            />
          }
        />
      </>
    );
}