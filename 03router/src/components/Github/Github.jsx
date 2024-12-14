import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[data])
  return (
    <div className='flex flex-col items-center justify-center m-4 text-center'>
      <h1 className='text-3xl m-4 font-bold'>Chai Followers: {data.followers}</h1>
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github
export const githubloaderInfo = async ()=>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}