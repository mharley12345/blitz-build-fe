import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DeleteDocument({documents,deleteStatus,handleDeleteClose}){
    const { deleteDocument } = useContext(DocumentContext);
 
    return (
        <>
        <Modal
        visible={deleteStatus}
        dismiss={handleDeleteClose}
 
        client={"40%"}
        component={
            <Confirm
            closeModal={handleDeleteClose}
            deleteFunction={deleteDocument}
            deleteItem={documents}
            text={`${documents.file_name} document`}
            />
        }
        />
        </>
    )
}