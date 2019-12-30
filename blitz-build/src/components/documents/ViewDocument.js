import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function ViewDocument({documents,viewStatus,handleViewClose}){
    const { viewDocument } = useContext(DocumentContext);
    return (
        <>
        <Modal
        visible={viewStatus}
        dismiss={handleViewClose}
        client={"40%"}
        component={
            <Confirm
            closeModal={handleViewClose}
            viewFunction={viewDocument}
            viewItem={documents}
            text={`${documents.file_name} document`}
            />
        }
        />
        </>
    )
}