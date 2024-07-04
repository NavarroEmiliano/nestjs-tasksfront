import { Task } from '../interfaces/task.interface'

type Props = {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  return (
    <div className='bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer'>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className='flex gap-2'>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default TaskItem
