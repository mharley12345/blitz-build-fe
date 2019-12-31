import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function DownloadDocument({documents,downloadStatus,handleDownloadClose}){
    const { downloadDocument } = useContext(DocumentContext);
    return (
        <>
        <Modal
        visible={downloadStatus}
        dismiss={handleDownloadClose}
        client={"40%"}
        component={
            <Confirm
            closeModal={handleDownloadClose}
            downloadFunction={downloadDocument}
            downloadItem={documents}
            text={`${documents} document`}
            />
        }
        />
        </>
    )
}