import React from "react";
import { useState } from "react";

const App = () =>{
  const [Count, setCount] = useState(1)
  return(
    <>
    <h1>{Count}</h1>
    <button onClick={()=>setCount(Count => Count+1)}>Add</button>
    <button onClick={()=>setCount(Count => (Count > 0 ? Count-1 : 0) )}>Sub</button>
    </>
  )
};

export default App