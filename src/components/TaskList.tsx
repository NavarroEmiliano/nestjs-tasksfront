import { useEffect, useState } from 'react'
import { getTaskRequest } from '../services/taskService'
import { Task } from '../interfaces/task.interface'
import TaskItem from './TaskItem'

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const getAllTasks = async () => {
      const res = await getTaskRequest()
      const data = await res.json()
      setTasks(data)
    }

    getAllTasks()
  }, [])
  return (
    <div>
      {tasks.map(task => (
        <TaskItem task={task} key={task._id}/>
      ))}
    </div>
  )
}

export default TaskList
