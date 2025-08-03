import React,{useEffect,useRef} from 'react'

const UseRefInput = () => {
    const inputref = useRef()
    useEffect(() => {
        inputref.current.focus()
    }, [])
    
  return <input ref={inputref} type="text" placeholder='Type here'/>
}

export default UseRefInput
