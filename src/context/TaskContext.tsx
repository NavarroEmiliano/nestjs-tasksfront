import { createContext, useEffect, useState } from 'react'
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest
} from '../services/taskService'
import { CreateTask, Task, UpdateTask } from '../interfaces/task.interface'
import { toast } from 'react-toastify'

export interface TaskContextValue {
  tasks: Task[]
  createTask: (task: CreateTask) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  updateTask: (id: string, task: UpdateTask) => Promise<void>
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {}
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
    toast.success('Task added successfully')
  }

  const deleteTask = async (id: string) => {
    const res = await deleteTaskRequest(id)
    if (res.status === 204) {
      setTasks(tasks.filter(t => t._id !== id))
      toast.success('Task deleted successfully')
    }
  }

  const updateTask = async (id: string, task: UpdateTask) => {
    const res = await updateTaskRequest(id, task)
    const data = await res.json()
    setTasks(tasks.map(t => (t._id === id ? data : t)))
    toast.success('Task updated successfully')
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}
