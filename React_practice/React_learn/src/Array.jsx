import React,{useState} from 'react'

const Array = () => {
    const [fruit, setFruit] = useState(['Mango','Apple'])
    const changeFruit = () =>{
        setFruit(prev => [...prev,'Orange'])
    }
  return (
    <>
        <h1>Fruits:</h1>
        <ul>
            {fruit.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul> 
        <button onClick={changeFruit}>Add fruit</button>
    </>
  )
}

export default Array
