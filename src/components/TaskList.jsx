
import { useContext } from "react"
import CardTask from "./taskCard"
import { TaskContext } from "../context/TaskContext"


const TaskList = () => {
    const { tasks } = useContext(TaskContext)

    if (tasks.length == 0) {
        return <h1 className="text-white font-bold text-center text-4xl">No tienes tareas</h1>
    }

    return <div className="grid grid-cols-4 gap-2 ">
        {tasks.map((tarea) => {
            return <CardTask tarea={tarea} />
        })}</div>
}
export default TaskList 