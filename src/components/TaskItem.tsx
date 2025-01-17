import { useTasks } from '../context/useTasks'
import { Task } from '../interfaces/task.interface'
import { IoCheckmarkDone } from 'react-icons/io5'
import { FaRegTrashCan } from 'react-icons/fa6'

type Props = {
  task: Task
}

const TaskItem = ({ task }: Props) => {
  const { deleteTask, updateTask } = useTasks()

  return (
    <div className='bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer'>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className='flex gap-2'>
        <IoCheckmarkDone
          className={`${task.done ? 'text-green-700' : 'text-white'} text-xl`}
          onClick={() => updateTask(task._id, { done: !task.done })}
        ></IoCheckmarkDone>
        <FaRegTrashCan onClick={() => deleteTask(task._id)}></FaRegTrashCan>
      </div>
    </div>
  )
}

export default TaskItem
