import React from 'react'

export default function Confirm({ closeModal, text }) {
    return (
        <div>
            <button onClick={ closeModal }>X</button>
            <h1>{text}</h1>
            <p>Are you sure you want to delete?</p>
            <button onClick={ closeModal }>Cancel</button>
            <button>Delete</button>

        </div>
    )
}
