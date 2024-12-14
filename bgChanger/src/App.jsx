import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BackGround from './components/BackGround'
import './App.css'

function App() {
  let [color, setColor] = useState('slate')

  function change(clr) {
    setColor(clr)
  }


  return (
    <div className='h-screen bg-slate-300 flex justify-center items-end' style={{background: color}} >
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '  >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-sm bg-white'>

      <button  onClick={()=>change("red")} className=' py-2 px-7 text-center rounded-lg   bg-red-600 text-black'>red</button>
      <button onClick={()=>change("blue")} className=' py-2 px-7 text-center rounded-lg text-white  bg-blue-600'>blue</button>
      <button onClick={()=>change("green")} className=' py-2 px-7 text-center rounded-lg text-white  bg-green-600'>green</button>
      <button onClick={()=>change("#333")} className=' py-2 px-7 text-center rounded-lg text-white  bg-slate-600'>slate</button>
      <button onClick={()=>change("white")} className=' py-2 px-7 text-center rounded-lg   bg-white text-black border border-l-violet-950'>white</button>
      <button onClick={()=>change("black")} className=' py-2 px-7 text-center rounded-lg text-white  bg-black'>black</button>
      <button onClick={()=>change("purple")} className=' py-2 px-7 text-center rounded-lg text-white  bg-purple-600'>purple</button>
      <button onClick={()=>change("pink")} className=' py-2 px-7 text-center rounded-lg text-white  bg-pink-600'>pink</button>
      <button onClick={()=>change("orange")} className=' py-2 px-7 text-center rounded-lg text-white  bg-orange-600'>orange</button>
      <button onClick={()=>change("yellow")} className=' py-2 px-7 text-center rounded-lg   bg-yellow-400 text-black'>Yellow</button>
        </div>
    </div>
    </div>
  )
}

export default App
