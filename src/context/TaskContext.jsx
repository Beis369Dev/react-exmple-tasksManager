
import {dataTask} from"../data/data" 
import{useEffect,useState,createContext}from "react"

 
export const TaskContext=createContext()

export const TaskContextProvider=(props)=>{

const [tasks,setTask]=useState([]);
 
    useEffect(()=>{
       setTask(dataTask)
    },[])
   
   const createTask=(newTitle, newDescription)=>{
     setTask([...tasks,{id: tasks.length, task: newTitle,description:  newDescription}])
   }
   
    const deleteTask=(taskId)=>{
     setTask(tasks.filter(task=> task.id != taskId))
     
   
    }

     return <TaskContext.Provider value={{tasks:tasks,createTask:createTask,deleteTask:deleteTask}}>
            {props.children}
     </TaskContext.Provider>
    

}


