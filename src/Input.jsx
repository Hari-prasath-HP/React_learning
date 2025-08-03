import React,{useState} from 'react'

const Input = () => {
    const [name, setName] = useState('')
    const change = (name) =>{
        setName(name.target.value)
    }
  return (
    <>
      <input type="text" value={name} onChange={change} />
      <h1>{name}</h1>
    </>
  )
}

export default Input
