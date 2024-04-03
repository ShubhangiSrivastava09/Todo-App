import { createContext, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider =({children}) =>{
const [taskList, setTaskList] = useState([ ])
const [completedTask, setCompletedTask] = useState([ ])

console.log(taskList)

return (
  <TaskContext.Provider value={{taskList,setTaskList,completedTask,setCompletedTask}}>
    {children}
  </TaskContext.Provider>
)
}