import { ChangeEvent, FormEvent, useState } from 'react'
import { createTaskRequest } from '../services/taskService'

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    done: false
  })
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createTaskRequest(task)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          className='border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2 '
          placeholder='Write a title'
          onChange={handleChange}
        />

        <textarea
          name='description'
          rows={3}
          className='border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2 '
          placeholder='Write a description'
          onChange={handleChange}
        ></textarea>
        <label htmlFor='done' className='inline-flex items-center gap-x-2'>
          <input
            type='checkbox'
            name='done'
            id='done'
            className='h-5 w-5 text-indigo-600'
            onChange={() => setTask({ ...task, done: !task.done })}
          />
          <span>Done</span>
        </label>
        <button className='bg-indigo-500 px-3 block py-2 w-full rounded-lg'>
          Save
        </button>
      </form>
    </div>
  )
}

export default TaskForm
