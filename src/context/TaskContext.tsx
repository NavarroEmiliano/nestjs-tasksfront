import { createContext, useEffect, useState } from 'react'
import { createTaskRequest, getTaskRequest } from '../services/taskService'
import { CreateTask, Task } from '../interfaces/task.interface'

export interface TaskContextValue {
  tasks: Task[]
  createTask: (task: CreateTask) => void
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: () => {}
})

interface Props {
  children: React.ReactNode
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])
  useEffect(() => {
    const getAllTasks = async () => {
      const res = await getTaskRequest()
      const data = await res.json()
      setTasks(data)
    }

    getAllTasks()
  }, [])

  const createTask = async (task: CreateTask) => {
    const res = await createTaskRequest(task)
    const data = await res.json()
    setTasks([...tasks, data])
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  )
}
