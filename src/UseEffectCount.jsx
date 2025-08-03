import React,{useEffect,useState} from 'react'

const UseEffectCount = () => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        document.title = `you have clicked ${count} times`
        console.log('Title is updated')
    }, [count])
    
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count => count+1)}>Add Count</button>
    </>
  )
}

export default UseEffectCount
