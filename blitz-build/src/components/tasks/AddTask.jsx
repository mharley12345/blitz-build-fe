import React from 'react'

export default function AddTask({ closeModal }) {
    return (
        <form>
            <button onClick= { closeModal }>x</button>

            <label>Task Name</label>
            <input/>

            <label>Task Decription</label>
            <input/>

            <label>Due Date</label>
            <input/>

            <label>Assign Project</label>
            <input/>
            
            <button>cancel</button>
            <button>add task</button>
        </form>
    )
}
