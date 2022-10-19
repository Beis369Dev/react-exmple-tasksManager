import { useState, useContext } from "react"
import{TaskContext}from"../context/TaskContext"




const TaskFrom=()=>{
    const {createTask} =useContext(TaskContext)
    const[titleTask,setTileTask]=useState("");
    const[description,setDescription]=useState("");

    const handelSubmit=(e)=>{
        e.preventDefault();
       
        if(titleTask ==""|| description=="" ){
            alert("Los campos no pueden estar vacios")
        }else{
            createTask(titleTask,description)
            setDescription("")
            setTileTask("")
        }

        
        
    }

    return <div className="max-w-md mx-auto">
        <form onSubmit={handelSubmit} className="bg-slate-800 p-10 mb-4 rounded-md" >
        <h1 className="text-white text-2xl font-bold mb-3">Agregar Tarea</h1>
        <input placeholder="Ingrse su tarea"
        onChange={(e)=>{setTileTask(e.target.value)}} value={titleTask} autoFocus 
        className="bg-stale-300 p-3 w-full mb-2"/>

        <textarea onChange={(e)=>setDescription( e.target.value)} cols="30" rows="3" value={description} placeholder="Descripcion de Tarea"  className="bg-stale-300 p-3 w-full mb-2"></textarea>

        <button className="bg-green-800 p-2 text-white rounded-md hover:bg-green-600 w-full" >Agregar</button>
    </form>
    </div>
}

export default TaskFrom