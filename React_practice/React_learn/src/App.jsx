import React from "react";
import { useState } from "react";

const App = () =>{
  const [Count, setCount] = useState(1)
  return(
    <>
    <h1>{Count}</h1>
    <button onClick={()=>setCount(Count => Count+1)}>Add</button>
    </>
  )
};

export default App