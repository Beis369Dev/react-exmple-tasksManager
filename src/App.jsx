import TaskList from"./components/TaskList"
 import TaskFrom from "./components/taskForm"


 function App (){
 
return <main className="bg-zinc-900 h-screen">
  <div className="container mx-auto p-10">
 
  <TaskFrom />
  <TaskList/>
  </div>
</main> 
  
 }

 export default App