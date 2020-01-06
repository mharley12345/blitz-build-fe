import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "./ConfirmDelete"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DeleteDocument(props){
   
       const {file_name ,handleDelete, deleteStatus,handleDeleteClose,documents} =useContext(DocumentContext)
      console.log(file_name)
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
            deleteItem={documents}
            text={`${document.file_name}` }
            />
        }
        />
        </>
    )
}