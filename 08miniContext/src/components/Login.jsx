import React,{useState ,useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
  const [number, setNumber] = useState(null)

  const {setUser}= useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault()
    setUser({number})
  }

  return (
    <>
    Enter a number
    <input value={number} onChange={(e)=> setNumber(e.target.value)} type="text" />
    <button onClick={handleSubmit} >Submit</button>
    </>
  )
}

export default Login
