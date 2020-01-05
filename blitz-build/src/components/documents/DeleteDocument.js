import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DeleteDocument(props){
    const {handleDelete, deleteStatus,handleDeleteClose,file_name} = props
       const {file_url} =useContext(DocumentContext)
    console.log(props)
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
            deleteItem={file_name}
            text={`${file_name} document`}
            />
        }
        />
        </>
    )
}