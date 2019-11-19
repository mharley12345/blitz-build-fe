import React from 'react'

import styled from "styled-components";
import { XButton } from "../../styles/tasks";

const ConfirmStyle = styled.div`

`


export default function Confirm({ closeModal, text, deleteFunction, deleteItem }) {
    return (
        <div>
            <div style={{textAlign: 'right', height: '50px'}}>
                <XButton onClick={ closeModal }>X</XButton>
            </div>
            <h1 style={{fontSize: '30px', fontFamily: 'roboto', fontWeight: 600}}>{text}</h1>
            <p>Are you sure you want to delete?</p>
            <button onClick={ closeModal }>Cancel</button>
            <button onClick={ () => {
                deleteFunction(deleteItem)
                closeModal()
            } }>Delete</button>
        </div>
    )
}