import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DeleteDocument({ deleteStatus,handleDeleteClose}){
    const { handleDelete,documents } = useContext(DocumentContext);
 
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
            deleteItem={documents[0]}
            text={`${documents[0].file_name} document`}
            />
        }
        />
        </>
    )
}