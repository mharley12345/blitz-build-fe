import React from 'react'

import styled from "styled-components";

const ConfirmStyle = styled.div`

`

const XButton = styled.button`
background-color: white;
border: none;
color: black;
padding: 10px 10px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 4px 2px;
cursor: pointer;
`

export default function Confirm({ closeModal, text, deleteFunction, deleteItem }) {
    return (
        <div>
            <div style={{textAlign: 'right'}}>
                <XButton onClick={ closeModal }>X</XButton>
            </div>
            <h1>{text}</h1>
            <p>Are you sure you want to delete?</p>
            <button onClick={ closeModal }>Cancel</button>
            <button onClick={ () => {
                deleteFunction(deleteItem)
                closeModal()
            } }>Delete</button>
        </div>
    )
}