'use client'
import {useEffect} from 'react'
export default function error({error}) {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div className="flex flex-col ">
        <h1>something went wrong </h1>
        <p>try again</p>
      
    </div>
  )
}
