import { ToastContainer } from 'react-toastify'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { TaskProvider } from './context/TaskContext'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='bg-zinc-900 h-screen text-white flex items-center justify-center'>
      <ToastContainer />
      <div className='bg-gray-950 p-4 max-w-md w-full'>
        <h1 className='text-3xl font-bold text-center block my-2'>Tasks App</h1>
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  )
}

export default App
