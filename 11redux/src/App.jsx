import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-blue-400 font-bold text-2xl '>Learn about redux toolkit</h1>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
