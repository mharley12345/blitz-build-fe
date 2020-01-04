import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "../global/Confirm"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function PrintDocument({documents,printStatus,handlePrintClose}){
    const { printDocument } = useContext(DocumentContext);
 
    return (
        <>
        <Modal
        visible={printStatus}
        dismiss={handlePrintClose}
        client={"40%"}
        component={
            <Confirm
            closeModal={handlePrintClose}
            printFunction={printDocument}
            printItem={documents}
            text={"Click To Print The Document"}
            />
        }
        />
        </>
    )
}