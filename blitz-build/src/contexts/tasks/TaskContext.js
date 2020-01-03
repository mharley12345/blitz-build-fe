import { createContext, useContext } from 'react';
import moment from "moment";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const newtask = (task) => {
    const newtask = {
    title: `${task.task_name} (${task.project_name})`,
    allDay: true,
    start: new Date(moment(task.due_date).format("L")),
    end: new Date(moment(task.due_date).format("L"))
}

return newtask
}


export default TaskContext;