import React,{useEffect,useRef, useState} from 'react'

const UseRefCount = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(1)
    useEffect(() => {
        console.log(` rendered ${countRef.current}`)
        countRef.current += 1
        // console.log(` rendered ${countRef.current}`)
    }, [count])
    
  return (
    <>
      <h1>{count}</h1>
      <h2>{countRef.current}</h2>
      <button onClick={()=>setCount(count=>count+1)}>Click</button>
    </>
  )
}

export default UseRefCount
