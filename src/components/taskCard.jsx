import {TaskContext} from "../context/TaskContext"
import{useContext}from"react"



const CardTask=({tarea})=>{
   const {deleteTask} =useContext(TaskContext)

 return   <div className="bg-gray-800 text-white p-4 rounded-md" >
    <h2 className="text-xl font-bold capitalize" >{tarea.task}</h2>
    <p className="text-gray-500 text-sm capitalize">{tarea.description}</p>
    <button onClick={()=>deleteTask(tarea.id)} className="bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-400" >Eliminar </button>
    </div>
   
}

export default CardTask