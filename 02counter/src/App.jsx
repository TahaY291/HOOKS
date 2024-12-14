import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(3)
  function inc() {
    setCounter((prev)=> prev !== 20 ? prev + 1 : prev)
  }
  function dec() {
    setCounter((prev)=> prev !== 0 ? prev - 1 : prev)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Current value is : {counter}</h2>
    <button onClick={inc}>Increase</button>
    <button onClick={dec} >Decrease</button>
    </>
  )
}

export default App
