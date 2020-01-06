import React, {useContext} from "react"

import Modal from "../global/Modal"
import Confirm from "./confirmPrint"

import DocumentContext from '../../contexts/documents/DocumentsContext'

export default function PrintDocument(props){
    const { printDocument } = useContext(DocumentContext);
    const {documents,printStatus,handlePrintClose} =props
 const handlePrint =(e)=> {
    
     window.print()
 }
    return (
        <>
        <Modal
        visible={printStatus}
        dismiss={handlePrintClose}
        client={"40%"}
        component={
            <Confirm
            closeModal={handlePrintClose}
            printFunction={handlePrint}
            printItem={documents}
            text={"Click To Print The Document"}
            />
        }
        />
        </>
    )
}