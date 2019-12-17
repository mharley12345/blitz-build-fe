import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../../utils/auth/axiosWithAuth";

//context
import searchTermContext from "./searchTerm";
export default function SearchProvider({ children }) {
const [searchTerm, setSearchTerm] = useState("");
const [results, setResults] = useState('');
const [taskSearchResults, setTaskSearchResults] = useState([]);
const [tasks, setTasks] = useState([])
const taskSearchInput = searchTerm.toLowerCase();
const [ searchCatch, setSearchCatch ] = useState('')
const [projects, setProjects] = useState([]);
  useEffect(() => {
    
    getTasks();
 
    if(searchTerm.length === 0) {
        setResults([])
    }
    else {
       setResults( tasks.filter(task => {
        if( task.task_name.toLowerCase().includes(taskSearchInput) ||  task.project_name.toLowerCase().includes(taskSearchInput)  ){
          return task
        }
     })
      )  
      
    }
   
         
      setTaskSearchResults(results);
    }, [taskSearchInput]);

  
    const getTasks = () => {
        const user_id = localStorage.getItem("user_id");
        axiosWithAuth()
          .get(`/projects/tasks/${user_id}`)
          .then(res => {
            console.log("get tasks", res.data.tasks);
            setTasks(res.data.tasks);
          })
          .catch(err => {
            console.log(err);
          });
        }


  
       

  
  return (
    <div>
      <searchTermContext.Provider value={{searchTerm, setSearchTerm, results, setResults, taskSearchInput, taskSearchResults, setTaskSearchResults, searchCatch, setSearchCatch  }}>
        {children}
      </searchTermContext.Provider>
    </div>
  );
}
