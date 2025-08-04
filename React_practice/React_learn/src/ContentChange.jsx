import React,{useRef} from 'react'

const ContentChange = () => {
    const inputRef = useRef()
    const headingRef = useRef()
    const handle = () =>{
        headingRef.current.textContent = inputRef.current.value
    }
  return (
    <>
      <h1 ref = {headingRef}>Hello world</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handle}>Update head</button>
    </>
  )
}

export default ContentChange
