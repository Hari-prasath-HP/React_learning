import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [num, setnum] = useState(1)
  const [num1, setnum1] = useState(100)
  useEffect(()=>{
    setnum(200)
    console.log('useEffect added')
    return()=>{
      setnum(1)
      console.log('memory cleared')
    }
  },[num])
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{setnum((curr)=>curr+1)}}>Add</button>
      <h1>{num1}</h1>
      <button onClick={()=>{setnum1((curr)=>curr+1)}}>Add</button>
    </div>
  )
}

export default App
