import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContextProvider } from './Context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setLightMode] = useState('light')
  function lightTheme() {
    setLightMode('light')
  }
  function darkTheme() {
    setLightMode('dark')
  }
  useEffect(()=> {
    let changeel = document.querySelector('html')
    changeel.classList.remove('light','dark')
    changeel.classList.add(themeMode)

  }, [themeMode])
  return (
    <ThemeContextProvider value={{themeMode,darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeContextProvider>
  )

}

export default App
