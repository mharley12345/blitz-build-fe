import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'
/** DeleteDocument.js
 *  This component takes in the params from DocumentsMeatballs.js 
 *  Displays ConfirmDownload.jsx modal and onConfirm click calls the handleDelete
 *  function described in ../../contexts/documents/DocumentsProvider.js
 * 
 * 
 */
export default function DeleteDocument({deleteStatus,handleDeleteClose,documents}){
   
       const {handleDelete} =useContext(DocumentContext)

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