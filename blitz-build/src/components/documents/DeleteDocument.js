import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DeleteDocument({documents,deleteStatus,handleDeleteClose}){
    const { handleDelete } = useContext(DocumentContext);
 
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
            text={`${documents} document`}
            />
        }
        />
        </>
    )
}