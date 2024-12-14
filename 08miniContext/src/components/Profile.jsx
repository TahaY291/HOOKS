import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  if (!user) return <div>Login Please</div>

  return <div>The number you have Enter {user.number} </div>
}

export default Profile