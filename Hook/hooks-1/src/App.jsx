import React,{useState} from 'react'

function App() {
  let [num,setnum] = useState(1)
  const handleAdd = () =>{
    setnum((curr)=>{
      return curr+1
    })
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default App

