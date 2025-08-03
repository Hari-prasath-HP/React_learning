import React,{ useEffect, useRef, useState } from 'react'
const App = () =>{
  const [input, setInput] = useState("")
  const inputRef = useRef();
  console.log('rendering')
  useEffect(()=>{inputRef.current = input},[input])
  const display = ()=>{
    console.log(inputRef.current)
  }
  return(
    <>
    <h1>Input</h1>
    <input type="text" 
    value={input} 
    onChange={(event)=>setInput(event.target.value)}
    />
    <p>My Name is : {input}</p>
    <p>My Name is : {inputRef.current}</p>
    <button onClick={display}>Show Input</button>
    </>
  )
}
export default App