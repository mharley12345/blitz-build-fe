import React from 'react'

//components
import TaskNav from '../../components/tasks/TaskNav/TaskNav'
import Task from '../../components/tasks/Task'

//styles
import styled from 'styled-components'

const StyledTasks = styled.div`
    margin-left: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;

`

const StyledTask = styled.div`
    width: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const tasks = [
    {
        name: 'stuff',
        description: 'lots of stuff'
    },
    {
        name: 'stuff',
        description: 'lots of stuff'
    },    
    {
        name: 'stuff',
        description: 'lots of stuff'
    },
]


export default function Tasks() {
    return (
        <StyledTasks>
            <TaskNav/>
            {tasks.map(task => {
                return (
                    <StyledTask>
                        <Task task={task}/>
                        <button>delete</button>
                        <button>edit</button>
                    </StyledTask>
                )
            })}
        </StyledTasks>
    )
}
