import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div className='bg-gray-700 text-white py-6 text-center'>
     <h1 className='text-3xl font-bold'>User : {userId} </h1>
    </div>
  )
}

export default User